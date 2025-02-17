export const documentation = {
  introduction: [{ 
    id: "introduction",
    title: "Introduction",
    content: `Welcome to the API documentation for the Philippine Ports Authority (PPA) Point of Sale (POS) System. This documentation provides developers and system integrators with the necessary information to effectively utilize the API, including endpoints, request and response formats, authentication methods, and error handling. Whether you are looking to integrate your systems with the PPA POS System or develop new applications that interact with it, this API offers the tools you need to enhance operational efficiency and improve service delivery at Philippine ports. \r\n\r\nExplore the sections below to get started with the PPA POS System API and unlock the potential of real-time transaction management in the maritime industry.`,
    subsections: [
      {
        id: "tech-stack",
        title: "Technology Stack",
        content: `
- **Backend Framework**: Laravel 10.x
- **Frontend Framework**: React 18.x with TypeScript
- **Database**: MySQL
- **Authentication**: 
- **Testing**: PHPStan, PHPUnit`,
      },
      {
        id: "database",
        title: "Database Structure",
        content: `Our MySQL database is designed with performance and scalability in mind. We use:

- **Migrations**: All database changes are version controlled
- **Foreign Keys**: Maintain referential integrity
- **Indexes**: Optimized for common queries
- **Soft Deletes**: Safe data removal with recovery options`,
      },
      {
        id: "authentication",
        title: "Authentication",
        content: "",
      },
    ],
  }],
  endpoints: [
    {
      id: "atmmonitoring",
      title: "ATM Monitoring",
      requests: [
        {
          method: "GET",
          path: "/api/v1/coresys/logtranx",
          description: "Retrieved transaction history",
          parameters: [
            {
              name: "is_command",
              type: "boolean",
              required: true,
              description: "",
            },
            {
              name: "dtlog",
              type: "string",
              required: true,
              description: "Date format (Y-m-d)",
            },
            {
              name: "limit",
              type: "number",
              required: true,
              description: "Number of rows to be retrieved.",
            },
            {
              name: "query",
              type: "string",
              required: false,
              description: "Search field value",
            },
          ],
          responses: [
            {
              status: 200,
              description: "Successfully retrieved list",
              example: {
                code: 0,
                payload: [
                  {
                    logseqno: 1,
                    dtlog: "2024-06-23 12:00:00",
                    trxcode: 101051,
                    mnemonic: "POSSALE",
                    trxdesc: "Sale of merchandise at POS",
                    amtreq: "2500",
                    amtauth: "2500",
                    sysvcode: 0,
                    shortdescription: "POS Sale",
                    msgtype: 51,
                    msgdesc: "Sale transaction completed successfully",
                    prkey1: "502003XXXXXX0001",
                    termtype: "POS",
                    termcode: "56789012",
                    authname: "POSX",
                    tpseqno: 6,
                    chseqno: 5,
                    chname: "POSX",
                    xml1: "<MerchantID>45678901234567890123</MerchantID><MerchantName>Sample Retail Store</MerchantName><MerchantLocation>PHILIPPINES</MerchantLocation><SECNODE>POS</SECNODE><TERMID>56789012</TERMID><SECCODE>56789012</SECCODE><ChannelType>POS</ChannelType><PCIDSS>Y</PCIDSS><EMV>Y</EMV><HSMFM>SALEKEYPOS</HSMFM><NORRULE>+sale,+process,+update</NORRULE><HSMESK>6E1452229212419AF0C1C7639D6CEC94</HSMESK><HSMNSK>9F632E2B902DC8F7EE4CFAEDF49DB8F08574E5382F59170B379823017E860F01</HSMNSK><HSMKVC>8AD333</HSMKVC>",
                    xml2: "<AccountNumber>987654321098</AccountNumber>",
                    xml3: "<TransactionDetails>Sale for account #987654321098</TransactionDetails>",
                    xml4: "<Items><Item><Description>Product A</Description><Quantity>1</Quantity><Price>1500</Price></Item><Item><Description>Product B</Description><Quantity>1</Quantity><Price>1000</Price></Item></Items>",
                    xml5: "<Currency>PHP</Currency>",
                    xml6: "<Status>Completed</Status>",
                  },
                  {
                    logseqno: 2,
                    dtlog: "2024-06-21 15:45:00",
                    trxcode: 211000,
                    mnemonic: "CSHOUT",
                    trxdesc: "POS Cashout",
                    amtreq: "1000",
                    amtauth: "1000",
                    sysvcode: 0,
                    shortdescription: "POS Cash Out",
                    msgtype: 51,
                    msgdesc: "POS cash out transaction successful",
                    prkey1: "502003XXXXXX0005",
                    termtype: "POS",
                    termcode: "34567890",
                    authname: "POSX",
                    tpseqno: 4,
                    chseqno: 3,
                    chname: "POSX",
                    xml1: "<MerchantID>23456789012345678901</MerchantID><MerchantName>Sample Retail Store</MerchantName><MerchantLocation>PHILIPPINES</MerchantLocation><SECNODE>POS</SECNODE><TERMID>34567890</TERMID><SECCODE>34567890</SECCODE><ChannelType>POS</ChannelType><PCIDSS>Y</PCIDSS><EMV>Y</EMV><HSMFM>CASHOUTPOSKEY</HSMFM><NORRULE>+cashout,+process,+update</NORRULE><HSMESK>4C1452229212419AF0C1C7639D6CEC92</HSMESK><HSMNSK>7D632E2B902DC8F7EE4CFAEDF49DB8F08574E5382F59170B379823017E860EFD</HSMNSK><HSMKVC>6AD111</HSMKVC>",
                    xml2: "<AccountNumber>987654321098</AccountNumber>",
                    xml3: "<TransactionDetails>Cash out for account #987654321098 at POS</TransactionDetails>",
                    xml4: "<PaymentMethod>Cash</PaymentMethod>",
                    xml5: "<Currency>PHP</Currency>",
                    xml6: "<Status>Completed</Status>",
                  },
                ],
                dt: "2025-02-17PST11:35:38",
                et: "2316ms",
              },
            },
            {
              status: 200,
              description: "Invalid parameter",
              example: {
                code: 400,
                message: "You have given an invalid parameter.",
                handler: "VE",
                dt: "2025-02-17PST11:58:59",
                payload: {
                  errcode: 0,
                  errmessage: "",
                  data: [],
                  xml: "",
                },
              },
            },
          ],
        },
      ],
    },
    {
      id: "posmonitoring",
      title: "POS Monitoring",
      requests: [
        {
          method: "GET",
          path: "/api/v1/coresys/logtranx/posmonitoring",
          description: "Retrieved logs per POS device",
          parameters: [
            {
              name: "termcode",
              type: "number",
              required: true,
              description: "Unique identifier for the device log that should be retrieved.",
            }
            
          ],
          responses: [
            {
              status: 200,
              description: "Successfully retrieved list",
              example: {
                code: 0,
                payload: [
                  {
                    dtlog: "2024-06-06 15:38:00",
                    description: "ATM Transfer From Savings to Checking Account", 
                    mnemonic: "TRNSACA", 
                    logseqno: 1, 
                    trxcode: 401020, 
                    authname: "ONUS", 
                    tpseqno: 1,
                    amtreq: "2000.00", 
                    amtauth: "2000.00", 
                    amtdec: 0, 
                    msgtype: 51, 
                    msgdesc: "Transaction processed", 
                    sysvcode: 0, 
                    shortdescription: "Payment", 
                    dbvcode: 0, 
                    fee1: "0", 
                    fee2: "0", 
                    prtype1: "", 
                    prtype2: "", 
                    prkey1: "", 
                    prkey2: "", 
                  },
                  {
                    dtlog: "2024-06-07 10:15:00",
                    description: "ATM Withdrawal from Savings Account",
                    mnemonic: "ATMWITH", 
                    logseqno: 2, 
                    trxcode: 101000, 
                    authname: "ATM",
                    tpseqno: 1, 
                    amtreq: "500.00", 
                    amtauth: "500.00",
                    amtdec: 500, 
                    msgtype: 51, 
                    msgdesc: "Withdrawal successful", 
                    sysvcode: 0, 
                    shortdescription: "Withdrawal", 
                    dbvcode: 0, 
                    fee1: "18", 
                    fee2: "0", 
                    prtype1: "CARD", 
                    prtype2: "", 
                    prkey1: "502003XXXXXX0005", 
                    prkey2: "", 
                  },
                ],
                dt: "2025-02-17PST11:35:38",
                et: "2316ms",
              },
            },
            {
              status: 200,
              description: "Invalid parameter",
              example: {
                code: 400,
                message: "You have given an invalid parameter.",
                handler: "VE",
                dt: "2025-02-17PST11:58:59",
                payload: {
                  errcode: 0,
                  errmessage: "",
                  data: [],
                  xml: "",
                },
              },
            },
          ],
        },
      ],
    },
  ],
};
