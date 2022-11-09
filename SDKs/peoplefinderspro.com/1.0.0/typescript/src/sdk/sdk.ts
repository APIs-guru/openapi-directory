import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import {GetHeadersFromRequest} from "../internal/utils/headers";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://api.peoplefinderspro.com",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
  };
}


export class SDK {
  defaultClient?: AxiosInstance;
  securityClient?: AxiosInstance;
  security?: any;
  serverURL: string;

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this.serverURL == "") {
      this.serverURL = Servers[0];
    }

    if (!this.defaultClient) {
      this.defaultClient = axios.create({ baseURL: this.serverURL });
    }

    if (!this.securityClient) {
      if (this.security) {
        this.securityClient = CreateSecurityClient(
          this.defaultClient,
          this.security
        );
      } else {
        this.securityClient = this.defaultClient;
      }
    }
  }
  
  // PostAddressAutocomplete - Search
  /** 
   * ###### *Click on the grey search box above, to view sample request/response objects for Address Autocomplete Search*
   * 
   * Perform a search:
   * 
   * 1. Add your key and key secret to the request headers.
   *     + galaxy-ap-name: [Key]
   *     + galaxy-ap-password: [Secret]
   *     + galaxy-search-type: DevAPIAddressAutoComplete
   * 
   * 2.  Add search criteria to your request.
   *     ~~~html
   *             {
   *                 "Input":"1821 Q"
   *             }
   *     ~~~
   * 
   * 3.  Submit your search
   * 
   * The JSON request should have parts of the address.
   * 
   * + <code>Input</code> = null (optional, string) ... address.
  **/
  PostAddressAutocomplete(
    req: operations.PostAddressAutocompleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAddressAutocompleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAddressAutocompleteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/address/autocomplete";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostAddressAutocompleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostContactEnrich - Search
  /** 
   * ###### *Click on the grey search box above, to view sample request/response objects for Contact Enrichment Search*
   * 
   * Perform a search:
   * 
   * 1. Add your key and key secret to the request headers.
   *     + galaxy-ap-name: [Key]
   *     + galaxy-ap-password: [Secret]
   *     + galaxy-search-type: DevAPIContactEnrich
   * 
   * 2.  Add search criteria to your request. At least two are required: Name, Phone, Address, or Email.
   *     ~~~html
   *             {
   *                 "FirstName": "John",
   *                 "MiddleName": "T",
   *                 "LastName": "Lawrence",
   *                 "Dob":"",
   *                 "Age": 0,
   *                 "Address": {
   *                     "addressLine1":"123 Q Street",
   *                     "addressLine2":"Sacramento, CA"
   *                 },
   *                 "PhoneNumber":"",
   *                 "Email":""
   *             }
   *     ~~~
   * 
   * 3.  Submit your search
   * 
   * A complete list of JSON request properties follows.
   * 
   * + <code>FirstName</code>= null (optional, string) ... First name.
   * 
   * + <code>MiddleName</code> = null (optional, string) ... Middle name or middle initial.
   * 
   * + <code>LastName</code> = null (optional, string) ... Last name.
   * 
   * + <code>Dob</code> = null (optional, string) ... Date of birth (format: MM/DD/YYYY).
   * 
   * + <code>Age</code> = null (optional, int) ... Age.
   * 
   * + <code>Addresses</code> = null (optional, Addresses[]) ... List of addresses.
   *     + <code>Members</code>
   *         + <code>AddressLine1</code> = null (optional, string) ... House number, street name and Unit number (i.e. 123 Q Street, Unit 102) or PO Box (i.e. 1821 Q Street).
   *         + <code>AddressLine2</code> = null (optional, string) ... State or City and State or Zip (i.e. Sacramento, CA).
   * 
   * + <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).
   * 
   * + <code>Email</code> = null (optional, string) ... E-mail address.
  **/
  PostContactEnrich(
    req: operations.PostContactEnrichRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostContactEnrichResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostContactEnrichRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/contact/enrich";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostContactEnrichResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostEmailEnrich - Search
  /** 
   * ###### *Click on the grey search box above, to view sample request/response objects for Email Enrichment Search*
   * 
   * Perform a search:
   * 
   * 1. Add your Access Profile username and password to the request headers.
   *     + galaxy-ap-name: [Key]
   *     + galaxy-ap-password: [Secret]
   *     + galaxy-search-type: DevAPIEmailID
   * 
   * 2.  Add search criteria to your request.
   *     ~~~html
   *             {
   *                 "Email":"johnsmith@somedomain"
   *             }
   *     ~~~
   * 
   * 3.  Submit your search
   * 
   * The JSON request should have an email.
   * 
   * + <code>Email</code> = null (optional, string) ... E-mail address.
  **/
  PostEmailEnrich(
    req: operations.PostEmailEnrichRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostEmailEnrichResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostEmailEnrichRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/email/enrich";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostEmailEnrichResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostPhoneEnrich - Search
  /** 
   * ###### *Click on the grey search box above, to view sample request/response objects for Phone Enrichment Search*
   * 
   * Perform a search:
   * 
   * 1. Add your key and key secret to the request headers.
   *     + galaxy-ap-name: [Key]
   *     + galaxy-ap-password: [Secret]
   *     + galaxy-search-type: DevAPICallerID
   * 
   * 2.  Add search criteria to your request.
   *     ~~~html
   *             {
   *                 "Phone":"(123) 456-7890"
   *             }
   *     ~~~
   * 
   * 3.  Submit your search
   * 
   * The JSON request should have a phone number.
   * 
   * + <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).
  **/
  PostPhoneEnrich(
    req: operations.PostPhoneEnrichRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPhoneEnrichResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPhoneEnrichRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/phone/enrich";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostPhoneEnrichResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Search - Search
  /** 
   * ###### *Click on the grey search box above, to view sample request/response objects for the Identity Verification Search*
   * 
   * Perform a search:
   * 
   * 1. Add your key and key secret to the request headers.
   *     + galaxy-ap-name: [Key]
   *     + galaxy-ap-password: [Secret]
   *     + galaxy-search-type: DevAPIIDVerification
   * 
   * 2.  Add search criteria to your request. At least two are required: SSN, Name, Phone, Address or Email.
   *     ~~~html
   *             {
   *                 "FirstName": "John",
   *                 "MiddleName": "T",
   *                 "LastName": "Lawrence",
   *                 "Dob":"",
   *                 "Age": 0,
   *                 "Address": {
   *                     "addressLine1":"123 Q Street, Unit 102",
   *                     "addressLine2":"Sacramento, CA"
   *                 },
   *                 "PhoneNumber":"",
   *                 "Email":""
   *             }
   *     ~~~
   * 
   * 3.  Submit your search
   * 
   * A complete list of JSON request properties follows.
   * 
   * + <code>FirstName</code>= null (optional, string) ... First name.
   * 
   * + <code>MiddleName</code> = null (optional, string) ... Middle name or middle initial.
   * 
   * + <code>LastName</code> = null (optional, string) ... Last name.
   * 
   * + <code>Dob</code> = null (optional, string) ... Date of birth (format: MM/DD/YYYY).
   * 
   * + <code>Age</code> = null (optional, int) ... Age.
   * 
   * + <code>Addresses</code> = null (optional, Addresses[]) ... List of addresses.
   *     + <code>Members</code>
   *         + <code>AddressLine1</code> = null (optional, string) ... House number, street name and Unit number (i.e. 123 Q Street, Unit 102) or PO Box (i.e. 1821 Q Street).
   *         + <code>AddressLine2</code> = null (optional, string) ... State or City and State or Zip (i.e. Sacramento, CA).
   * 
   * + <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).
   * 
   * + <code>Email</code> = null (optional, string) ... E-mail address.
  **/
  Search(
    req: operations.SearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/identity/verify_id";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
