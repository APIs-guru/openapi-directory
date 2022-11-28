import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Show {
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
   * getShows - Returns scheduled shows optionally filtered by {start} and/or {end} datetimes
   *
   * **Terminology**: Spinitron defines a *show* as a radio program. A show can have one or more *schedules*,
   * each of which may specify either an *occurence* or a *repetition*, which represents a set of occurences.
   * Thus scheduled shows have occurences that, for example, may be displayed in a calendar.
   * 
   * In the response, `items` is an array of objects representing occurences of scheduled shows.
   * 
   * You may optionally filter `items` to a datetime *range* by including in the request {start} and/or {end}
   * parameters, both of which must be no more than one hour in the past. An occurence starting at {end} is
   * included in the reponse.
   * 
   * `itmes` can include occurences that begin *or* end within the filter range. A show that goes on air before
   * {start} appears in `items` if it ends *after* but not *at* {start}. An occurence starting at or before {end}
   * is included.
   * 
   * If the request omits the {start} parameter, the server sets its value to the current time so that the filter
   * range's start is always defined. If the request specifies {end} then the requested range is *bounded*,
   * otherwise it is *unbounded*.
   * 
   * For a bounded request, `items` includes *every* occurence of all shows occuring in the range. The only
   * difference between objects in `items` representing a given show will be the `start` field value.
   * 
   * For an unbounded request, `items` includes *only one* occurence per show, specifically, the
   * next occurrence after {start} of all shows occuring after {start}.
   * 
   * Use an unbounded request to get a straight list all shows. Use a bounded request to get a calendar/agenda
   * of shows expanded into occurrences by thir shedules and repetitions.
   * 
   * Objects in `items` are ordered first by `datetime` and then by `id`.
   * 
  **/
  getShows(
    req: operations.GetShowsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetShowsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetShowsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/shows";
    
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
        const res: operations.GetShowsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getShows200ApplicationJsonObject = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getShowsId - Get a Show by id
   *
   * The response object represents the next occurence of the show specified by {id}.
   * 
   * Status 404 is returned if a show with {id} does not exist or if it does but all its scheduled occurences elapsed in the past.
   * 
  **/
  getShowsId(
    req: operations.GetShowsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetShowsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetShowsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/shows/{id}", req.pathParams);
    
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
        const res: operations.GetShowsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.show = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
