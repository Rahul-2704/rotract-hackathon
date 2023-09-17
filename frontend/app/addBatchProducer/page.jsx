"use client";
import React, { useState } from "react";
import axios from "axios";
import {ethers} from "ethers";
import Track from "../abi/Tracking.json";
import Web3 from 'web3'
export default function Producer() {
  const [batchID, setBatchID] = useState();
  const [medName, setMedName] = useState("");
  const [sealOn, setSealOn] = useState(true);
  const [count, setCount] = useState();
  const [src, setSrc] = useState();
  const [address,setAddress] = useState();
  async function func()
  {
    await window.ethereum.enable()
    const accounts = await web3.eth.getAccounts();
    const userAddress = accounts[0];
    setAddress(userAddress)
  }
  func()

  const web3 = new Web3(window.ethereum || "https://sepolia.infura.io/v3/b4c4e8b157d84818a775acd08ab8ecfb")
  const contractAddress = '0x5E3059345efd6EdD4aFC3408B0166954f0656316'; // Replace with your contract's address
  const myContract = new web3.eth.Contract(Track.abi, contractAddress);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      batchID: batchID,
      medName: medName,
      sealOn: true,
      count: count,
    };
    console.log(JSON.stringify(data));
    console.log(address);
    myContract.methods.addBatch(batchID, medName, sealOn, count)
        .send({ from: address }) // Replace with the sender's Ethereum wallet address
        .on('transactionHash', (hash) => {
          // This callback is triggered when the transaction is sent
          console.log(`Transaction hash: ${hash}`);
        })
        .on('receipt', (receipt) => {
          // This callback is triggered when the transaction is confirmed
          console.log('Transaction receipt:', receipt);
        })
        .on('error', (error) => {
          // This callback is triggered if there's an error with the transaction
          console.error('Transaction error:', error);
        });

    axios
      .get(
        `http://api.qrserver.com/v1/create-qr-code/?data=${JSON.stringify(
          data
        )}&size=200x200`,
        { responseType: "blob" }
      )
      .then((res) => {
        let reader = new window.FileReader();
        reader.readAsDataURL(res.data);
        reader.onload = async function () {
          let imageDataUrl = reader.result;
          const headers = {
            accept: "application/json",
            "content-type": "application/x-www-form-urlencoded",
            "X-API-Key": `${process.env.NEXT_PUBLIC_VERBWIRE_KEY}`,
          };
          const d = new FormData();
          d.set("fileUrl", imageDataUrl);
          const res = await axios
            .post("https://api.verbwire.com/v1/nft/store/fileFromUrl", d, {
              headers: headers,
            })
            .then((qrdata) => {
              setSrc(qrdata.data.ipfs_storage.ipfs_url);
            });
        };
      });
  };
  return (
    <div className="flex justify-center items-center">
      <section>
        <div className="grid grid-cols-1">
          <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24  ">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md ">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Dashboard Production
              </h2>
              <div className="flex justify-between gap-10">
                <form action="/" className="mt-8">
                  <div className="space-y-5">
                    <div>
                      <label
                        htmlFor="batchId"
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Batch Id{" "}
                      </label>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="number"
                          onChange={(e) => setBatchID(e.target.value)}
                          placeholder="Batch Id"
                          id="batchId"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="med_name"
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Medicine Name{" "}
                      </label>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          onChange={(e) => setMedName(e.target.value)}
                          placeholder="Medicine Name"
                          id="med_name"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="count"
                          className="text-base font-medium text-gray-900"
                        >
                          {" "}
                          Quantity{" "}
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="number"
                          onChange={(e) => setCount(e.target.value)}
                          placeholder="Quantity"
                          id="count"
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        onClick={(e) => handleSubmit(e)}
                        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                      >
                        Create Batch{" "}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex justify-end">
              <img src={src} alt="QR code" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
