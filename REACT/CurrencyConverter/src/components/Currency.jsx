import React, { useState } from "react";
import CountryData from "../assets/CountryData.json";

const Currency = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  console.log(CountryData);
  return (
    <>
      <div className="bg-amber-200">
        <div className="w-3xl bg-white rounded shadow border p-3">
          <div className="grid grid-cols-2 gap-5">
            <select
              name="from"
              value={from}
              onChange={(e)=> setFrom(e.target.value)}
              className="border p-3 rounded-2xl overflow-hidden"
            >
              <option value="">--Select-Country--</option>
              {CountryData.map((country, idx) => (
                <option
                  value={country.CurrencyCode + " " + country.CountryCode}
                >
                    <img src="" alt="" />
                  {country.CountryName}
                </option>
              ))}
            </select>

            <select
              name="to"
              value={to}
              onChange={(e)=> setTo(e.target.value)}
              className="border p-3 rounded-2xl overflow-hidden"
            >
              <option value="">--Select-Country--</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Currency;