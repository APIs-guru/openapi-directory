import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://api.taxrates.io/api",
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
  
  // AllTaxRates - All tax rates
  /** 
   * <p>Get request. This method returns all tax rates configured on your account. Based on your country selection the endpoint will return all taxes for all countries. You can use the 'filter' parameter to narrow results to selected type of tax. Use 'zip' parameter when you have selected the United States.</p>
   * <p>We have development an easy to use scheduler so you can call the API to get the rates every hour or day. Please click on the following link to see the <a href="https://gist.github.com/gregbird/cd904ff230cdf86253716aa351154edb">code on Github</a>.</p>
   * <p><b>Please note</b> in cases when a US state doesn't have sales tax and when a product is tax exempt for a zip code or for a state the API response will be "null"</p>
   * <p>To get a response you need to have selected a product code in your Taxrates.io dashboard, please see the Introduction section above for description of the different types of product codes.</p>
   * <p>For US sales tax you can filter the tax rate you want for each state or zip code with one of the following: (they are case sensitive)</p>
   * <ul>
   *   <li>CombinedRate</li>
   *   <li>StateRate</li>
   *   <li>CountyRate</li>
   *   <li>CityRate</li>
   *   <li>SpecialRate</li>
   * </ul>
   * <pre><code class="js">
   *   var taxrates_endpoint = 'tax/rates';
   *   var taxrates_params = {'domain':'api.taxrates.io'};
   *   var taxrates_url = '/api/v3/';
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
   *       success: function (data, textStatus, jqXHR) {
   *         //Maintain errors inside success because the API may return 200 in general, but different code inside
   *           if(data.ErrorCode=='404' || data.ErrorCode=='500'){
   *             //Maintain errors here
   *             console.log(data.ErrorMessage);
   *             return false;
   *           }else{
   *             var rates = [];
   *             var i=0;
   *             var taxrates_range = '';
   *             jQuery.each(data, function(k, v) {
   *                 if(v.hasOwnProperty("rates")){
   *                     jQuery.each(v.rates, function(m, w) {
   *                         rates[i] = [];
   *                         //Only showing standard rate type
   *                         if( w.Type == "standard" ){
   *                             rates[i][0] = w.Type;
   *                             rates[i][1] = w.data_value;
   *                             rates[i][2] = w.product_code;
   *                             i++;
   *                         }
   *                     });
   *                 }
   *             }).fail(function(xhr) {
   *                     //Maintain your errors here
   *                     return false;
   *             });
   *             var cursor = jqXHR.getResponseHeader('X-Cursor-Next');
   *             if (cursor) {
   *               // get next page...
   *             }
   *             return true;
   *   }else{
   *     //Not logged into taxrates.io
   *     //Maintain your errors here
   *     return false;
   *   }</code></pre>
   * 
  **/
  AllTaxRates(
    req: operations.AllTaxRatesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AllTaxRatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AllTaxRatesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/tax/rates";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.AllTaxRatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.allTaxRates200ApplicationJsonObjects = httpRes?.data;
            }
            break;
          case 404:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.allTaxRates500ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TaxRatesByCountryCode - Tax rates by Country Code
  /** 
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
  TaxRatesByCountryCode(
    req: operations.TaxRatesByCountryCodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TaxRatesByCountryCodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TaxRatesByCountryCodeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/tax/countrycode";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.TaxRatesByCountryCodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taxRatesByCountryCode200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.taxRatesByCountryCode500ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TaxRatesByIpAddress - Tax rates by IP address
  /** 
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
  TaxRatesByIpAddress(
    req: operations.TaxRatesByIpAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TaxRatesByIpAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TaxRatesByIpAddressRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/tax/ip";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.TaxRatesByIpAddressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taxRatesByIpAddress200ApplicationJsonObjects = httpRes?.data;
            }
            break;
          case 404:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.taxRatesByIpAddress500ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
