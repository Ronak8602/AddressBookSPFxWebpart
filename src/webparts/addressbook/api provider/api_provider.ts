// import { WebPartContext } from "@microsoft/sp-webpart-base";
// import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';

//import { Axios } from "axios";

export class ApiProvider {

    static token: string = "eyJ0eXAiOiJKV1QiLCJub25jZSI6Illtb01HbmVzc19COUw4WE9xUjQzU0tCbE10bVFqcURQYXdjcjlka3ZOWVkiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8wNmRlODdkMC0xYmU1LTQ3NmEtODRiNS0yNDRlNDBjZWQ4MmYvIiwiaWF0IjoxNjcxNzc2Mjk2LCJuYmYiOjE2NzE3NzYyOTYsImV4cCI6MTY3MTc4MDE5NiwiYWlvIjoiRTJaZ1lQaHFwSGt5dXNEOHZVdkZncDhGc3ozekFBPT0iLCJhcHBfZGlzcGxheW5hbWUiOiJBZGRyZXNzQm9vayIsImFwcGlkIjoiOTY3ZWQ4ODctNjA2NS00ZThkLTg0YWMtODRhMDIzZGZmNmI0IiwiYXBwaWRhY3IiOiIxIiwiaWRwIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMDZkZTg3ZDAtMWJlNS00NzZhLTg0YjUtMjQ0ZTQwY2VkODJmLyIsImlkdHlwIjoiYXBwIiwib2lkIjoiNjYxNWRlNjctY2NjNS00Y2JiLWFlOWMtNzZlNDk1MzNkYTViIiwicmgiOiIwLkFWa0EwSWZlQnVVYmFrZUV0U1JPUU03WUx3TUFBQUFBQUFBQXdBQUFBQUFBQUFDZEFBQS4iLCJyb2xlcyI6WyJVc2VyLlJlYWRCYXNpYy5BbGwiLCJVc2VyLlJlYWRXcml0ZS5BbGwiLCJVc2VyLlJlYWQuQWxsIl0sInN1YiI6IjY2MTVkZTY3LWNjYzUtNGNiYi1hZTljLTc2ZTQ5NTMzZGE1YiIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJOQSIsInRpZCI6IjA2ZGU4N2QwLTFiZTUtNDc2YS04NGI1LTI0NGU0MGNlZDgyZiIsInV0aSI6ImJ3RVlySXNlRjB1VFB4S2tWRmphQVEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjA5OTdhMWQwLTBkMWQtNGFjYi1iNDA4LWQ1Y2E3MzEyMWU5MCJdLCJ4bXNfdGNkdCI6MTY2NTcwNDU0M30.m2bygjM3n_zg7OwXdWmfPElg0N3k7fTnFjd_d9GAPmWcCxrYzpi1oBzVV5Em8fzOTpfdsXx91SGqE1Y6jNH_UkdjTH-4o1EQT9RDnGm8hjx7UZHKAlcn87UFl0FF7webAYtixY9r59P4R42aHplXnSwA2P7vjXFimG38fOTEl4pQkF7pUezn0Leex1xU2BifRcQCk6hcdH4Vn06AXDqn2uw-VnA3JgPj4egWjXWGqWJKsR63naOa67lDhW0esov7PHQecZxj8-zxs0yA3xd3anMOsTroE_0xlo2zIisx3jYLCCO_rIFBCO3oOCNftdMzsDsYduIWK82XnClG0uc4Gw";

    // static async generateToken() {


    //     var myHeaders = new Headers();
    //     myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    //     myHeaders.append("Access-Control-Allow-Origin", "https://qvzz.sharepoint.com");
    //     // myHeaders.append("Cookie", "fpc=AkztXwPzv2pJl3kDFGKciePAoaRLAQAAAOs9NtsOAAAA; stsservicecookie=estsfd; x-ms-gateway-slice=estsfd");

    //     var formdata = new FormData();
    //     formdata.append("grant_type", "client_credentials");
    //     formdata.append("client_id", "967ed887-6065-4e8d-84ac-84a023dff6b4");
    //     formdata.append("client_secret", "VqS8Q~TZI-Yo33jToAHHh.2sYOtowkFd1m4gOdw9");
    //     formdata.append("scope", "https://graph.microsoft.com/.default");

    //     var requestOptions: RequestInit = {
    //         method: 'POST',
    //         headers: myHeaders,
    //         body: formdata,
    //         redirect: 'follow'
    //     };

    //     try {
    //         const response = await fetch(`https://login.microsoftonline.com/06de87d0-1be5-476a-84b5-244e40ced82f/oauth2/v2.0/token`, requestOptions);
    //         if (!response.ok) {
    //             throw new Error(`Error! status: ${response.status}`);
    //         }

    //         const result = await response.json();
    //         return result;
    //     } catch (e) {
    //         console.log(e);
    //     }

    //     // const APP_ID = '967ed887-6065-4e8d-84ac-84a023dff6b4';
    //     // const APP_SECERET = 'VqS8Q~TZI-Yo33jToAHHh.2sYOtowkFd1m4gOdw9';
    //     // const TOKEN_ENDPOINT = 'https://login.microsoftonline.com/06de87d0-1be5-476a-84b5-244e40ced82f/oauth2/v2.0/token';
    //     // const MS_GRAPH_SCOPE = 'https://graph.microsoft.com/.default';

    //     // const axios : Axios = require('axios');
    //     // const qs = require('qs');

    //     // const postData = {
    //     //     client_id: APP_ID,
    //     //     scope: MS_GRAPH_SCOPE,
    //     //     client_secret: APP_SECERET,
    //     //     grant_type: 'client_credentials'
    //     // };

    //     // axios.defaults.headers.post['Content-Type'] =
    //     //     'multipart/form-data';

    //     // //  let token = '';

    //     // axios
    //     //     .post(TOKEN_ENDPOINT, qs.stringify(postData))
    //     //     .then((response: any) => {
    //     //         console.log(response.data);
    //     //     })
    //     //     .catch((error: any) => {
    //     //         console.log(error);
    //     //     });

    // }

    static createContact(contact: Contact, update: Function): void {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${this.token}`);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "accountEnabled": true,
            "city": "Seattle",
            "country": "United States",
            "department": "Sales & Marketing",
            "displayName": contact.name,
            "givenName": contact.name,
            "jobTitle": "Marketing Director",
            "mailNickname": "MelissaD",
            "passwordPolicies": "DisablePasswordExpiration",
            "passwordProfile": {
                "password": "a91a8105-f2a9-867b-96eb-259b08b274fc",
                "forceChangePasswordNextSignIn": false
            },
            "officeLocation": "131/1105",
            "postalCode": "98052",
            "preferredLanguage": "en-US",
            "state": "WA",
            "streetAddress": "9256 Towne Center Dr., Suite 400",
            "surname": "Darrow",
            "mobilePhone": contact.mobile,
            "usageLocation": "US",
            "userPrincipalName": `${contact.name}@qvzz.onmicrosoft.com`
        });

        var requestOptions: RequestInit = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://graph.microsoft.com/v1.0/users", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);
                update();
            })
            .catch(error => console.log('error', error));
    }

    static async getAllContacts() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${this.token}`);

        var requestOptions: RequestInit = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        return new Promise<any>((resolve: (data: any) => void, reject: (error: any) => void): void => {
            fetch("https://graph.microsoft.com/v1.0/users", requestOptions).then((response) => {
                return response.json().then((res) => {
                    if (!response.ok) {
                        reject({
                            status: response.status ? response.status.toString() : "",
                            message: (res.error.message && res.error.message.value) || 'Request Failed'
                        });
                    }
                    else {
                        console.log(res);
                        resolve(res);
                    }
                })
            })
                .catch(error => console.log('error', error));
        });
    }

    // static async getAllContacts(context: WebPartContext) {
    //     var requestInit = {
    //         headers: {
    //             'Accept': 'application/json;odata=nometadata',
    //             'odata-version': ''
    //         }
    //     };
    //     return new Promise<any>((resolve: (data: any) => void, reject: (error: any) => void): void => {
    //         context.spHttpClient.get(context.pageContext.web.absoluteUrl + `/_api/web/lists/GetByTitle('Contacts')/items`, SPHttpClient.configurations.v1, requestInit).then((response: SPHttpClientResponse) => {
    // return response.json().then((res) => {
    // if (!response.ok) {
    //     reject({
    //         status: response.status ? response.status.toString() : "",
    //         message: (res.error.message && res.error.message.value) || 'Request Failed'
    //     });
    // }
    // else {
    //     resolve(res);
    // }
    //             });
    //         }).catch((e: any) => {
    //             reject({
    //                 status: "",
    //                 message: 'Request Failed'
    //             });
    //         });
    //     });
    // }

    static deleteContact(key: string, update: Function) {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${this.token}`);

        var requestOptions: RequestInit = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch(`https://graph.microsoft.com/v1.0/users/{${key}}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);
                update();
            })
            .catch(error => console.log('error', error));
    }

    static updateContact(contact: Contact, update: Function): void {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${this.token}`);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "displayName": contact.name
        });

        var requestOptions: RequestInit = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`https://graph.microsoft.com/v1.0/users/{${contact.key}}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);
                update();
            })
            .catch(error => console.log('error', error));
    }
}

export interface Contact {
    key: string,
    name: string,
    email: string,
    mobile: string,
    landline: string,
    website: string,
    address: string
}
