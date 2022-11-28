import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
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
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}


export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this._serverURL == "") {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      this._securityClient = this._defaultClient;
    }
    
  }
  
  /**
   * postAddressAutocomplete - Search
   *
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
  postAddressAutocomplete(
    req: operations.PostAddressAutocompleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAddressAutocompleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAddressAutocompleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/address/autocomplete";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostAddressAutocompleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postContactEnrich - Search
   *
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
  postContactEnrich(
    req: operations.PostContactEnrichRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostContactEnrichResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostContactEnrichRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/contact/enrich";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostContactEnrichResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postEmailEnrich - Search
   *
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
  postEmailEnrich(
    req: operations.PostEmailEnrichRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostEmailEnrichResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostEmailEnrichRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/email/enrich";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostEmailEnrichResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPhoneEnrich - Search
   *
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
  postPhoneEnrich(
    req: operations.PostPhoneEnrichRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPhoneEnrichResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPhoneEnrichRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/phone/enrich";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPhoneEnrichResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * search - Search
   *
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
  search(
    req: operations.SearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/identity/verify_id";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
