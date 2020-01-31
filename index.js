const puppeteer=require('puppeteer')
require("dotenv").config();
const deletePath='../../../..'
const fs = require("fs");
const path = require("path");
const csv = require("csvtojson");


const scrapeConnect=async ()=>{
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null
      });

      const page=await browser.newPage()

      await page.goto("", { waitUntil: "networkidle2" })

}