// SPDX-License-Identifier: MIT

pragma experimental ABIEncoderV2;

contract Tracking{

    enum State{
        produced,
        receivedByTr,
        inTransport,
        receivedByDr,
        toConsumers
    }

    enum Roles{
        manufacturer,
        transport,
        distributor,
        noRole
    }


    struct user {
        address userAdr;
        Roles role;
    }

    struct Medicine{
        uint256 batchID;
        address prodID;
        address transID;
        address distID;
        State itemState;
        string medName;
        bool sealOn;
        uint256 timestamp;
        uint64 count;
    }


    mapping(address => user) public userInfo;
    mapping(address => Medicine[]) public ownerBatches;
    mapping(uint256 => Medicine) public getBatchwithPID;
    mapping(uint256 => Medicine) public getBatchwithTID;
    mapping(uint256 => Medicine) public getBatchwithDID;

    address Owner;


    constructor() public {
        Owner = msg.sender;
    }


    modifier onlyOwner() {
        require(Owner == msg.sender);
        _;
    }

    modifier checkUser(address addr) {
        require(addr == msg.sender);
        _;
    }

    modifier onlyManufacturer(){
        require(userInfo[msg.sender].role == Roles.manufacturer);
        _;
    }

    modifier onlyTransport(){
        require(userInfo[msg.sender].role == Roles.transport);
        _;
    }

    modifier onlyDistributor(){
        require(userInfo[msg.sender].role == Roles.distributor);
        _;
    }

    modifier checkState(uint256 _batchID, State _state){
        Medicine memory batch=getBatchwithPID[_batchID];
        require(getBatchwithPID[_batchID].itemState == _state);
        _;
    }


    event userRegistered(address indexed userID);
    event manufacturedMedicine(address indexed producer, uint256 batchid);
    event sealBrokenTr(address indexed prod, address indexed trans, uint256 batch);
    event countMismatchTr(address indexed prod, address indexed trans, uint256 batch);
    event sealBrokenDr(address indexed prod, address indexed trans, uint256 batch);
    event countMismatchDr(address indexed prod, address indexed trans, uint256 batch);


    function newUser (address _userID, Roles _role) public onlyOwner {
        user memory newser = user({
        userAdr : _userID,
        role : _role
        });
        userInfo[_userID] = newser;
        emit userRegistered(_userID);
    }

    function addBatch(uint256 _batchID, string memory _medName, bool _sealOn,uint64 _count) public {
        Medicine memory newMedicine = Medicine({
        batchID: _batchID,
        prodID: msg.sender,
        transID: address(0),
        distID: address(0),
        itemState: State.produced,
        medName: _medName,
        sealOn: _sealOn,
        timestamp: block.timestamp,
        count: _count
        });
        ownerBatches[msg.sender].push(newMedicine);
        getBatchwithPID[_batchID]=newMedicine;
        emit manufacturedMedicine(msg.sender,_batchID);
    }

    function getBatchesOfProducer(address _prodID) public view returns(Medicine[] memory){
        return ownerBatches[_prodID];
    }

    function getBatchInfo(uint256 _batchID) public view returns (Medicine memory){
        return getBatchwithPID[_batchID];
    }



    function transportCheck (uint256 _batchID, bool _sealOn, uint64 _count) onlyTransport public {

        Medicine memory batch=getBatchwithPID[_batchID];
        batch.itemState = State.receivedByTr;
        batch.transID = msg.sender;
        if(!_sealOn){
            emit sealBrokenTr(batch.prodID, msg.sender, _batchID);
            require(_sealOn==true, "Seal is found broken by Transporter");
        }

        if(_count != batch.count){
            emit countMismatchTr(batch.prodID, msg.sender, _batchID);
            require(_count == batch.count, "The medicine count is found wrong at transportor");
        }
        batch.itemState= State.inTransport;
    }


    function distributorCheck(uint256 _batchID, bool _sealOn, uint64 _count) onlyDistributor public {

        Medicine memory batch=getBatchwithPID[_batchID];
        batch.itemState = State.receivedByDr;
        batch.distID = msg.sender;
        if(!_sealOn){
            emit sealBrokenDr(batch.prodID, msg.sender, _batchID);
            require(_sealOn==true, "Seal is found broken by Distributor");
        }

        if(_count != batch.count){
            emit countMismatchDr(batch.prodID, msg.sender, _batchID);
            require(_count == batch.count, "The medicine count is mismatched at distributor");
        }
        batch.itemState= State.toConsumers;
    }
}