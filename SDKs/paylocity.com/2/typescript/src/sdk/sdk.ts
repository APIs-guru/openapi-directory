import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import {GetHeadersFromRequest} from "../internal/utils/headers";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
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
  
  // AddClientSecret - Obtain new client secret.
  /** 
   * Obtain new client secret for Paylocity-issued client id. See Setup section for details.
  **/
  AddClientSecret(
    req: operations.AddClientSecretRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddClientSecretResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddClientSecretRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/credentials/secrets";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AddClientSecretResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.clientCredentialsResponses = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AddEmployee - Add new employee
  /** 
   * New Employee API sends new employee data directly to Web Pay. Companies who use the New Hire Template in Web Pay may require additional fields when hiring employees. New Employee API Requests will honor these required fields.
  **/
  AddEmployee(
    req: operations.AddEmployeeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddEmployeeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddEmployeeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AddEmployeeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.employeeIdResponses = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AddLocalTax - Add new local tax
  /** 
   * Sends new employee local tax information directly to Web Pay.
  **/
  AddLocalTax(
    req: operations.AddLocalTaxRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddLocalTaxResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddLocalTaxRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/localTaxes", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AddLocalTaxResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AddNewEmployeeToWebLink - Add new employee to Web Link
  /** 
   * Add new employee to Web Link will send partially completed or potentially erroneous new hire record to Web Link, where it can be corrected and competed by company administrator or authorized Paylocity Service Bureau employee.
  **/
  AddNewEmployeeToWebLink(
    req: operations.AddNewEmployeeToWebLinkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddNewEmployeeToWebLinkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddNewEmployeeToWebLinkRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/weblinkstaging/companies/{companyId}/employees/newemployees", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AddNewEmployeeToWebLinkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.trackingNumberResponses = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case 403:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AddOrUpdateAdditionalRates - Add/update additional rates
  /** 
   * Sends new or updated employee additional rates information directly to Web Pay.
  **/
  AddOrUpdateAdditionalRates(
    req: operations.AddOrUpdateAdditionalRatesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddOrUpdateAdditionalRatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddOrUpdateAdditionalRatesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/additionalRates", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AddOrUpdateAdditionalRatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AddOrUpdateAnEmployeeEarning - Add/Update Earning
  /** 
   * Add/Update Earning API sends new or updated employee earnings information directly to Web Pay.
  **/
  AddOrUpdateAnEmployeeEarning(
    req: operations.AddOrUpdateAnEmployeeEarningRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddOrUpdateAnEmployeeEarningResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddOrUpdateAnEmployeeEarningRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/earnings", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AddOrUpdateAnEmployeeEarningResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AddOrUpdateEmergencyContacts - Add/update emergency contacts
  /** 
   * Sends new or updated employee emergency contacts directly to Web Pay.
  **/
  AddOrUpdateEmergencyContacts(
    req: operations.AddOrUpdateEmergencyContactsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddOrUpdateEmergencyContactsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddOrUpdateEmergencyContactsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/emergencyContacts", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AddOrUpdateEmergencyContactsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AddOrUpdateNonPrimaryStateTax - Add/update non-primary state tax
  /** 
   * Sends new or updated employee non-primary state tax information directly to Web Pay.
  **/
  AddOrUpdateNonPrimaryStateTax(
    req: operations.AddOrUpdateNonPrimaryStateTaxRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddOrUpdateNonPrimaryStateTaxResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddOrUpdateNonPrimaryStateTaxRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/nonprimaryStateTax", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AddOrUpdateNonPrimaryStateTaxResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AddOrUpdatePrimaryStateTax - Add/update primary state tax
  /** 
   * Sends new or updated employee primary state tax information directly to Web Pay.
  **/
  AddOrUpdatePrimaryStateTax(
    req: operations.AddOrUpdatePrimaryStateTaxRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddOrUpdatePrimaryStateTaxResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddOrUpdatePrimaryStateTaxRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/primaryStateTax", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AddOrUpdatePrimaryStateTaxResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteEarningByEarningCodeAndStartDate - Delete Earning by Earning Code and Start Date
  /** 
   * Delete Earning by Earning Code and Start Date
  **/
  DeleteEarningByEarningCodeAndStartDate(
    req: operations.DeleteEarningByEarningCodeAndStartDateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteEarningByEarningCodeAndStartDateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteEarningByEarningCodeAndStartDateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/earnings/{earningCode}/{startDate}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteEarningByEarningCodeAndStartDateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteLocalTaxByTaxCode - Delete local tax by tax code
  /** 
   * Delete local tax by tax code
  **/
  DeleteLocalTaxByTaxCode(
    req: operations.DeleteLocalTaxByTaxCodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteLocalTaxByTaxCodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteLocalTaxByTaxCodeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/localTaxes/{taxCode}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteLocalTaxByTaxCodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAllCompanyCodesAndDescriptionsByResource - Get All Company Codes
  /** 
   * Get All Company Codes for the selected company and resource
  **/
  GetAllCompanyCodesAndDescriptionsByResource(
    req: operations.GetAllCompanyCodesAndDescriptionsByResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllCompanyCodesAndDescriptionsByResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllCompanyCodesAndDescriptionsByResourceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/codes/{codeResource}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAllCompanyCodesAndDescriptionsByResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.companyCodes = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAllCustomFieldsByCategory - Get All Custom Fields
  /** 
   * Get All Custom Fields for the selected company
  **/
  GetAllCustomFieldsByCategory(
    req: operations.GetAllCustomFieldsByCategoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllCustomFieldsByCategoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllCustomFieldsByCategoryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/customfields/{category}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAllCustomFieldsByCategoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.customFieldDefinitions = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAllDirectDeposit - Get All Direct Deposit
  /** 
   * Get All Direct Deposit returns main direct deposit and all additional direct depositsfor the selected employee.
  **/
  GetAllDirectDeposit(
    req: operations.GetAllDirectDepositRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllDirectDepositResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllDirectDepositRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/directDeposit", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAllDirectDepositResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.directDeposits = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAllEarnings - Get All Earnings
  /** 
   * Get All Earnings returns all earnings for the selected employee.
  **/
  GetAllEarnings(
    req: operations.GetAllEarningsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllEarningsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllEarningsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/earnings", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAllEarningsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.earnings = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetEarningByEarningCodeAndStartDate - Get Earning by Earning Code and Start Date
  /** 
   * Get Earnings returns the single earning with the provided earning code and start date for the selected employee.
  **/
  GetEarningByEarningCodeAndStartDate(
    req: operations.GetEarningByEarningCodeAndStartDateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEarningByEarningCodeAndStartDateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEarningByEarningCodeAndStartDateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/earnings/{earningCode}/{startDate}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetEarningByEarningCodeAndStartDateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.earning = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetEarningsByEarningCode - Get Earnings by Earning Code
  /** 
   * Get Earnings returns all earnings with the provided earning code for the selected employee.
  **/
  GetEarningsByEarningCode(
    req: operations.GetEarningsByEarningCodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEarningsByEarningCodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEarningsByEarningCodeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/earnings/{earningCode}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetEarningsByEarningCodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.earnings = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAllEmployees - Get all employees
  /** 
   * Get All Employees API will return employee data currently available in Web Pay.
  **/
  GetAllEmployees(
    req: operations.GetAllEmployeesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllEmployeesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllEmployeesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAllEmployeesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.employeeInfos = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAllLocalTaxes - Get all local taxes
  /** 
   * Returns all local taxes for the selected employee.
  **/
  GetAllLocalTaxes(
    req: operations.GetAllLocalTaxesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllLocalTaxesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllLocalTaxesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/localTaxes", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAllLocalTaxesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.localTaxes = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCompanySpecificOpenApiDocumentation - Get Company-Specific Open API Documentation
  /** 
   * The company-specific Open API endpoint allows the client to GET an Open API document for the Paylocity API that is customized with company-specific resource schemas. These customized resource schemas define certain properties as enumerations of pre-defined values that correspond to the company's setup with Web Pay. The customized schemas also indicate which properties are required by the company within Web Pay.<br  />To learn more about Open API, click [here](https://www.openapis.org/)
  **/
  GetCompanySpecificOpenApiDocumentation(
    req: operations.GetCompanySpecificOpenApiDocumentationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompanySpecificOpenApiDocumentationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompanySpecificOpenApiDocumentationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/openapi", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCompanySpecificOpenApiDocumentationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case 403:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetEmployee - Get employee
  /** 
   * Get Employee API will return employee data currently available in Web Pay.
  **/
  GetEmployee(
    req: operations.GetEmployeeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEmployeeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEmployeeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetEmployeeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.employees = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetLocalTaxByTaxCode - Get local taxes by tax code
  /** 
   * Returns all local taxes with the provided tax code for the selected employee.
  **/
  GetLocalTaxByTaxCode(
    req: operations.GetLocalTaxByTaxCodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLocalTaxByTaxCodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLocalTaxByTaxCodeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/localTaxes/{taxCode}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetLocalTaxByTaxCodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.localTaxes = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYear - Get employee pay statement details data for the specified year.
  /** 
   * Get pay statement details API will return employee pay statement details data currently available in Web Pay for the specified year.
  **/
  GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYear(
    req: operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/paystatement/details/{year}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.payStatementDetails = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDate - Get employee pay statement details data for the specified year and check date.
  /** 
   * Get pay statement details API will return employee pay statement detail data currently available in Web Pay for the specified year and check date.
  **/
  GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDate(
    req: operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/paystatement/details/{year}/{checkDate}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.payStatementDetails = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYear - Get employee pay statement summary data for the specified year.
  /** 
   * Get pay statement summary API will return employee pay statement summary data currently available in Web Pay for the specified year.
  **/
  GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYear(
    req: operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/paystatement/summary/{year}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.payStatementSummaries = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDate - Get employee pay statement summary data for the specified year and check date.
  /** 
   * Get pay statement summary API will return employee pay statement summary data currently available in Web Pay for the specified year and check date.
  **/
  GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDate(
    req: operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/paystatement/summary/{year}/{checkDate}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.payStatementSummaries = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateEmployee - Update employee
  /** 
   * Update Employee API will update existing employee data in WebPay.
  **/
  UpdateEmployee(
    req: operations.UpdateEmployeeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateEmployeeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateEmployeeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateEmployeeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateOrAddEmployeeBenefitSetup - Add/update employee's benefit setup
  /** 
   * Sends new or updated employee benefit setup information directly to Web Pay.
  **/
  UpdateOrAddEmployeeBenefitSetup(
    req: operations.UpdateOrAddEmployeeBenefitSetupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateOrAddEmployeeBenefitSetupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateOrAddEmployeeBenefitSetupRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/companies/{companyId}/employees/{employeeId}/benefitSetup", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateOrAddEmployeeBenefitSetupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errors = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
