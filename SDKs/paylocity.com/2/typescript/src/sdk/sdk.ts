import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://api.paylocity.com/api",
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
   * addClientSecret - Obtain new client secret.
   *
   * Obtain new client secret for Paylocity-issued client id. See Setup section for details.
  **/
  addClientSecret(
    req: operations.AddClientSecretRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddClientSecretResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddClientSecretRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/credentials/secrets";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.AddClientSecretResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.clientCredentialsResponses = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * addEmployee - Add new employee
   *
   * New Employee API sends new employee data directly to Web Pay. Companies who use the New Hire Template in Web Pay may require additional fields when hiring employees. New Employee API Requests will honor these required fields.
  **/
  addEmployee(
    req: operations.AddEmployeeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddEmployeeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddEmployeeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.AddEmployeeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.employeeIdResponses = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * addLocalTax - Add new local tax
   *
   * Sends new employee local tax information directly to Web Pay.
  **/
  addLocalTax(
    req: operations.AddLocalTaxRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddLocalTaxResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddLocalTaxRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/localTaxes", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.AddLocalTaxResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * addNewEmployeeToWebLink - Add new employee to Web Link
   *
   * Add new employee to Web Link will send partially completed or potentially erroneous new hire record to Web Link, where it can be corrected and competed by company administrator or authorized Paylocity Service Bureau employee.
  **/
  addNewEmployeeToWebLink(
    req: operations.AddNewEmployeeToWebLinkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddNewEmployeeToWebLinkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddNewEmployeeToWebLinkRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/weblinkstaging/companies/{companyId}/employees/newemployees", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.AddNewEmployeeToWebLinkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.trackingNumberResponses = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * addOrUpdateAdditionalRates - Add/update additional rates
   *
   * Sends new or updated employee additional rates information directly to Web Pay.
  **/
  addOrUpdateAdditionalRates(
    req: operations.AddOrUpdateAdditionalRatesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddOrUpdateAdditionalRatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddOrUpdateAdditionalRatesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/additionalRates", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AddOrUpdateAdditionalRatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * addOrUpdateAnEmployeeEarning - Add/Update Earning
   *
   * Add/Update Earning API sends new or updated employee earnings information directly to Web Pay.
  **/
  addOrUpdateAnEmployeeEarning(
    req: operations.AddOrUpdateAnEmployeeEarningRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddOrUpdateAnEmployeeEarningResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddOrUpdateAnEmployeeEarningRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/earnings", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AddOrUpdateAnEmployeeEarningResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * addOrUpdateEmergencyContacts - Add/update emergency contacts
   *
   * Sends new or updated employee emergency contacts directly to Web Pay.
  **/
  addOrUpdateEmergencyContacts(
    req: operations.AddOrUpdateEmergencyContactsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddOrUpdateEmergencyContactsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddOrUpdateEmergencyContactsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/emergencyContacts", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AddOrUpdateEmergencyContactsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * addOrUpdateNonPrimaryStateTax - Add/update non-primary state tax
   *
   * Sends new or updated employee non-primary state tax information directly to Web Pay.
  **/
  addOrUpdateNonPrimaryStateTax(
    req: operations.AddOrUpdateNonPrimaryStateTaxRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddOrUpdateNonPrimaryStateTaxResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddOrUpdateNonPrimaryStateTaxRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/nonprimaryStateTax", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AddOrUpdateNonPrimaryStateTaxResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * addOrUpdatePrimaryStateTax - Add/update primary state tax
   *
   * Sends new or updated employee primary state tax information directly to Web Pay.
  **/
  addOrUpdatePrimaryStateTax(
    req: operations.AddOrUpdatePrimaryStateTaxRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddOrUpdatePrimaryStateTaxResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddOrUpdatePrimaryStateTaxRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/primaryStateTax", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AddOrUpdatePrimaryStateTaxResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteEarningByEarningCodeAndStartDate - Delete Earning by Earning Code and Start Date
   *
   * Delete Earning by Earning Code and Start Date
  **/
  deleteEarningByEarningCodeAndStartDate(
    req: operations.DeleteEarningByEarningCodeAndStartDateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteEarningByEarningCodeAndStartDateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteEarningByEarningCodeAndStartDateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/earnings/{earningCode}/{startDate}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteEarningByEarningCodeAndStartDateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteLocalTaxByTaxCode - Delete local tax by tax code
   *
   * Delete local tax by tax code
  **/
  deleteLocalTaxByTaxCode(
    req: operations.DeleteLocalTaxByTaxCodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteLocalTaxByTaxCodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteLocalTaxByTaxCodeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/localTaxes/{taxCode}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteLocalTaxByTaxCodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAllCompanyCodesAndDescriptionsByResource - Get All Company Codes
   *
   * Get All Company Codes for the selected company and resource
  **/
  getAllCompanyCodesAndDescriptionsByResource(
    req: operations.GetAllCompanyCodesAndDescriptionsByResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllCompanyCodesAndDescriptionsByResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllCompanyCodesAndDescriptionsByResourceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/codes/{codeResource}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAllCompanyCodesAndDescriptionsByResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.companyCodes = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAllCustomFieldsByCategory - Get All Custom Fields
   *
   * Get All Custom Fields for the selected company
  **/
  getAllCustomFieldsByCategory(
    req: operations.GetAllCustomFieldsByCategoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllCustomFieldsByCategoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllCustomFieldsByCategoryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/customfields/{category}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAllCustomFieldsByCategoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.customFieldDefinitions = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAllDirectDeposit - Get All Direct Deposit
   *
   * Get All Direct Deposit returns main direct deposit and all additional direct depositsfor the selected employee.
  **/
  getAllDirectDeposit(
    req: operations.GetAllDirectDepositRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllDirectDepositResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllDirectDepositRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/directDeposit", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAllDirectDepositResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.directDeposits = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAllEarnings - Get All Earnings
   *
   * Get All Earnings returns all earnings for the selected employee.
  **/
  getAllEarnings(
    req: operations.GetAllEarningsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllEarningsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllEarningsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/earnings", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAllEarningsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.earnings = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getEarningByEarningCodeAndStartDate - Get Earning by Earning Code and Start Date
   *
   * Get Earnings returns the single earning with the provided earning code and start date for the selected employee.
  **/
  getEarningByEarningCodeAndStartDate(
    req: operations.GetEarningByEarningCodeAndStartDateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEarningByEarningCodeAndStartDateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEarningByEarningCodeAndStartDateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/earnings/{earningCode}/{startDate}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetEarningByEarningCodeAndStartDateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.earning = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getEarningsByEarningCode - Get Earnings by Earning Code
   *
   * Get Earnings returns all earnings with the provided earning code for the selected employee.
  **/
  getEarningsByEarningCode(
    req: operations.GetEarningsByEarningCodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEarningsByEarningCodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEarningsByEarningCodeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/earnings/{earningCode}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetEarningsByEarningCodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.earnings = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAllEmployees - Get all employees
   *
   * Get All Employees API will return employee data currently available in Web Pay.
  **/
  getAllEmployees(
    req: operations.GetAllEmployeesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllEmployeesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllEmployeesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAllEmployeesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.employeeInfos = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAllLocalTaxes - Get all local taxes
   *
   * Returns all local taxes for the selected employee.
  **/
  getAllLocalTaxes(
    req: operations.GetAllLocalTaxesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllLocalTaxesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllLocalTaxesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/localTaxes", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAllLocalTaxesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.localTaxes = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCompanySpecificOpenApiDocumentation - Get Company-Specific Open API Documentation
   *
   * The company-specific Open API endpoint allows the client to GET an Open API document for the Paylocity API that is customized with company-specific resource schemas. These customized resource schemas define certain properties as enumerations of pre-defined values that correspond to the company's setup with Web Pay. The customized schemas also indicate which properties are required by the company within Web Pay.<br  />To learn more about Open API, click [here](https://www.openapis.org/)
  **/
  getCompanySpecificOpenApiDocumentation(
    req: operations.GetCompanySpecificOpenApiDocumentationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompanySpecificOpenApiDocumentationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompanySpecificOpenApiDocumentationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/openapi", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCompanySpecificOpenApiDocumentationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getEmployee - Get employee
   *
   * Get Employee API will return employee data currently available in Web Pay.
  **/
  getEmployee(
    req: operations.GetEmployeeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEmployeeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEmployeeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetEmployeeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.employees = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getLocalTaxByTaxCode - Get local taxes by tax code
   *
   * Returns all local taxes with the provided tax code for the selected employee.
  **/
  getLocalTaxByTaxCode(
    req: operations.GetLocalTaxByTaxCodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLocalTaxByTaxCodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLocalTaxByTaxCodeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/localTaxes/{taxCode}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetLocalTaxByTaxCodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.localTaxes = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getsEmployeePayStatementDetailDataBasedOnTheSpecifiedYear - Get employee pay statement details data for the specified year.
   *
   * Get pay statement details API will return employee pay statement details data currently available in Web Pay for the specified year.
  **/
  getsEmployeePayStatementDetailDataBasedOnTheSpecifiedYear(
    req: operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/paystatement/details/{year}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.payStatementDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDate - Get employee pay statement details data for the specified year and check date.
   *
   * Get pay statement details API will return employee pay statement detail data currently available in Web Pay for the specified year and check date.
  **/
  getsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDate(
    req: operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/paystatement/details/{year}/{checkDate}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.payStatementDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYear - Get employee pay statement summary data for the specified year.
   *
   * Get pay statement summary API will return employee pay statement summary data currently available in Web Pay for the specified year.
  **/
  getsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYear(
    req: operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/paystatement/summary/{year}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.payStatementSummaries = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDate - Get employee pay statement summary data for the specified year and check date.
   *
   * Get pay statement summary API will return employee pay statement summary data currently available in Web Pay for the specified year and check date.
  **/
  getsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDate(
    req: operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/paystatement/summary/{year}/{checkDate}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.payStatementSummaries = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateEmployee - Update employee
   *
   * Update Employee API will update existing employee data in WebPay.
  **/
  updateEmployee(
    req: operations.UpdateEmployeeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateEmployeeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateEmployeeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "patch",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateEmployeeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateOrAddEmployeeBenefitSetup - Add/update employee's benefit setup
   *
   * Sends new or updated employee benefit setup information directly to Web Pay.
  **/
  updateOrAddEmployeeBenefitSetup(
    req: operations.UpdateOrAddEmployeeBenefitSetupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateOrAddEmployeeBenefitSetupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateOrAddEmployeeBenefitSetupRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/benefitSetup", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateOrAddEmployeeBenefitSetupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
