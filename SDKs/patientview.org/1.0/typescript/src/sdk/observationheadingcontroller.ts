import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class ObservationHeadingController {
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
   * getAvailableObservationHeadings - Get Available Observations Types For a User
   *
   * Given a User ID retrieve a list of available observation types for that user (where they have observation data).
  **/
  getAvailableObservationHeadings(
    req: operations.GetAvailableObservationHeadingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAvailableObservationHeadingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAvailableObservationHeadingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/{userId}/availableobservationheadings", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAvailableObservationHeadingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.observationHeadings = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPatientEnteredObservationHeadings - Get Available Patient Entered Observations Types For a User
   *
   * Given a User ID retrieve a list of available observation types for that user (where they have patient entered observation data).
  **/
  getPatientEnteredObservationHeadings(
    req: operations.GetPatientEnteredObservationHeadingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPatientEnteredObservationHeadingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPatientEnteredObservationHeadingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/{userId}/patiententeredobservationheadings", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPatientEnteredObservationHeadingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.observationHeadings = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
