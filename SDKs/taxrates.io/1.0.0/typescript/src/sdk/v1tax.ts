import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class V1Tax {
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
   * taxRatesByCountryCode - Tax rates by Country Code
   *
   * Get request. This method returns all tax rates for country discovered based on country code. The country code must be 2 letters ISO 3166-1 alfa-2 country code (see <a href="https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes">here</a> for more information). You can use 'filter' parameter to narrow results to selected type of tax
   * <p>For US sales tax you can filter the tax rate you want for each state or zip code with one of the following: (they are case sensitive)</p>
   * <ul>
   *   <li>CombinedRate</li>
   *   <li>StateRate</li>
   *   <li>CountyRate</li>
   *   <li>CityRate</li>
   *   <li>SpecialRate</li>
   * </ul>
   * <pre><code class="js">var taxrates_endpoint = 'tax/countrycode';
   *   var taxrates_params = {'domain':'api.taxrates.io', 'country_code':'IE', 'product_code':'C010'};
   *   var taxrates_url = '/api/v1/';
   *   if ( localStorage.getItem("Taxrates_API_Client_Secret") ){
   *   jQuery.support.cors = true;
   *   jQuery.ajax({
   *       url: taxrates_url+taxrates_endpoint,
   *       type: 'get',
   *       method: 'get',
   *       dataType: "json",
   *       data: taxrates_params,
   *       beforeSend: function (request) {
   *               request.withCredentials = true;
   *               request.setRequestHeader("Authorization", "Apikey " + localStorage.getItem("Taxrates_API_Client_Secret"));
   *       },
   *       headers: {
   *         "accept": "application/json"
   *       },
   *       contentType: 'application/json; charset=utf-8',
   *       success: function (data) {
   *         //Maintain errors inside success because the API may return 200 in general, but different code inside
   *           if(data.ErrorCode=='404' || data.ErrorCode=='500'){
   *             //Maintain errors here
   *             console.log(data.ErrorMessage);
   *             return false;
   *           }else{
   *             var rates = [];
   *             var i=0;
   *             jQuery.each(data, function(k, v) {
   *                 if(v.hasOwnProperty("taxes")){
   *                     jQuery.each(v.taxes, function(m, w) {
   *                         rates[i] = [];
   *                         //Only showing standard rate type
   *                         if( w.Type == "standard" ){
   *                             rates[i][0] = w.Country;
   *                             rates[i][1] = w.Type;
   *                             rates[i][2] = w.data_value;
   *                             i++;
   *                         }
   *                     });
   *                 }
   *             //Now you have all your rates inside rates variable.
   *             }).fail(function(xhr) {
   *                     //Maintain your errors here
   *                     return false;
   *             });
   *             return true;
   *   }else{
   *     //Not logged into taxrates.io
   *     //Maintain your errors here
   *     return false;
   *   }</code></pre>
   * 
  **/
  taxRatesByCountryCode(
    req: operations.TaxRatesByCountryCodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TaxRatesByCountryCodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TaxRatesByCountryCodeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/tax/countrycode";
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.TaxRatesByCountryCodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.taxRatesByCountryCode200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.taxRatesByCountryCode500ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * taxRatesByIpAddress - Tax rates by IP address
   *
   * Get request. This method returns all tax rates for country discovered on either your IP address or IP address param. The IP param is not required. When empty, the taxrates.io will try to discover your IP address and based on this will retrieve the tax rates. You can use 'filter' parameter to narrow results to selected type of tax
   * <p>For US sales tax you can filter the tax rate you want for each state or zip code with one of the following: (they are case sensitive)</p>
   * <ul>
   *   <li>CombinedRate</li>
   *   <li>StateRate</li>
   *   <li>CountyRate</li>
   *   <li>CityRate</li>
   *   <li>SpecialRate</li>
   * </ul>
   * <pre><code class="js">var taxrates_endpoint = 'tax/ip';
   *   var taxrates_params = {'domain':'api.taxrates.io', 'ip':'208.80.152.201', 'product_code':'C010'};
   *   var taxrates_url = '/api/v1/';
   *   if ( localStorage.getItem("Taxrates_API_Client_Secret") ){
   *   jQuery.support.cors = true;
   *   jQuery.ajax({
   *       url: taxrates_url+taxrates_endpoint,
   *       type: 'get',
   *       method: 'get',
   *       dataType: "json",
   *       data: taxrates_params,
   *       beforeSend: function (request) {
   *               request.withCredentials = true;
   *               request.setRequestHeader("Authorization", "Apikey " + localStorage.getItem("Taxrates_API_Client_Secret"));
   *       },
   *       headers: {
   *         "accept": "application/json"
   *       },
   *       contentType: 'application/json; charset=utf-8',
   *       success: function (data) {
   *         //Maintain errors inside success because the API may return 200 in general, but different code inside
   *           if(data.ErrorCode=='404' || data.ErrorCode=='500'){
   *             //Maintain errors here
   *             console.log(data.ErrorMessage);
   *             return false;
   *           }else{
   *             var rates = [];
   *             var i=0;
   *             jQuery.each(data, function(k, v) {
   *                 if(v.hasOwnProperty("taxes")){
   *                     jQuery.each(v.taxes, function(m, w) {
   *                         rates[i] = [];
   *                         //Only showing standard rate type
   *                         if( w.Type == "standard" ){
   *                             rates[i][0] = w.Country;
   *                             rates[i][1] = w.Type;
   *                             rates[i][2] = w.data_value;
   *                             i++;
   *                         }
   *                     });
   *                 }
   *             //Now you have all your rates inside rates variable.
   *             }).fail(function(xhr) {
   *                     //Maintain your errors here
   *                     return false;
   *             });
   *             return true;
   *   }else{
   *     //Not logged into taxrates.io
   *     //Maintain your errors here
   *     return false;
   *   }</code></pre>
   * 
  **/
  taxRatesByIpAddress(
    req: operations.TaxRatesByIpAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TaxRatesByIpAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TaxRatesByIpAddressRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/tax/ip";
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.TaxRatesByIpAddressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.taxRatesByIpAddress200ApplicationJsonObjects = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.taxRatesByIpAddress500ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
