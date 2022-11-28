import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Tags {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * deleteTransactionsTransactionIdRelationshipsTags - Remove tags from transaction
   *
   * Disassociates one or more tags from a specific transaction. Tags that are
   * not associated are silently ignored. An HTTP `204` is returned on
   * success. The associated tags, along with this request URL, are also
   * exposed via the `tags` relationship on the transaction resource returned
   * from `/transactions/{id}`.
   * 
  **/
  deleteTransactionsTransactionIdRelationshipsTags(
    req: operations.DeleteTransactionsTransactionIdRelationshipsTagsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteTransactionsTransactionIdRelationshipsTagsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteTransactionsTransactionIdRelationshipsTagsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/transactions/{transactionId}/relationships/tags", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteTransactionsTransactionIdRelationshipsTagsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTags - List tags
   *
   * Retrieve a list of all tags currently in use. The returned list is
   * [paginated](#pagination) and can be scrolled by following the `next`
   * and `prev` links where present. Results are ordered lexicographically.
   * The `transactions` relationship for each tag exposes a link
   * to get the transactions with the given tag.
   * 
  **/
  getTags(
    req: operations.GetTagsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTagsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTagsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tags";
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetTagsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listTagsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postTransactionsTransactionIdRelationshipsTags - Add tags to transaction
   *
   * Associates one or more tags with a specific transaction. No more than 6
   * tags may be present on any single transaction. Duplicate tags are
   * silently ignored. An HTTP `204` is returned on success. The associated
   * tags, along with this request URL, are also exposed via the `tags`
   * relationship on the transaction resource returned from
   * `/transactions/{id}`.
   * 
  **/
  postTransactionsTransactionIdRelationshipsTags(
    req: operations.PostTransactionsTransactionIdRelationshipsTagsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostTransactionsTransactionIdRelationshipsTagsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostTransactionsTransactionIdRelationshipsTagsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/transactions/{transactionId}/relationships/tags", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PostTransactionsTransactionIdRelationshipsTagsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
