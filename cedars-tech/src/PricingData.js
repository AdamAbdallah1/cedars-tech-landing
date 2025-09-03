// src/pricingData.js

import { title } from "motion/react-client";

const pricingData = [ 
  {
    service: "Netflix",
    plans: [
      {
        title: "Single User",
        prices: {
          "1 Month": "$3",
          "3 Months": "$8",
          "6 Months": "$15",
          "1 Year": "$25"
        }
      },
      {
        title: "Full Account",
        prices: {
          "1 Month": "$13",
          "3 Months": "$27",
          "6 Months": "$48",
          "1 Year": "$95"
        }
      }
    ]
  },

  {
    service: "Shahid VIP",
    plans: [
      {
        title: "Single User",
        prices: {
          "1 Month": "$3",
          "3 Months": "$5",
          "1 Year": "$12",
        },
      },
      {
        title: "Full Account",
        prices: {
          "1 Month": "$6",
          "3 Months": "$14",
          "1 Year": "$30",
        },
      },
    ],
  },
  {
    service: "OSN",
    plans: [
      {
        title: "Single User",
        prices: {
          "1 Month": "$5",
          "1 Year": "$24",
        },
      },
      {
        title: "Full Account",
        prices: {
          "1 Month": "$13",
          "1 Year": "$80",
        },
      },
    ],
  },
  {
    service: "Anghami",
    plans: [
      {
        title: "Client Mail",
        prices: {
          "3 Months": "$6",
          "6 Months": "$9",
          "1 Year": "$15",
        },
      },
    ],
  },
  {
    service: "Spotify",
    plans: [
      {
        title: "Client Mail",
        prices: {
          "1 Month": "$8",
          "3 Months": "$12",
          "6 Months": "$15",
          "1 Year": "$25",
        },
      },
    ],
  },
  {
    service: "ChatGPT",
    plans: [
      {
        title: "Shared Account",
        prices: {
          "1 Month": "$6",
          "3 Months": "$11",
          "1 Year": "$25",
        },
      },
      {
        title: "Private Account",
        prices: {
          "1 Month": "$15",
        },
      },
    ],
  },
  {
    service: "Canva Pro",
    plans: [
      {
        title: "Client Mail",
        prices: {
          "1 Year": "$10",
          "Lifetime": "$20"
        }
      }
    ]
  }
];

export default pricingData;
