import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class V3Tax {
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
   * allTaxRates - All tax rates
   *
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
  allTaxRates(
    req: operations.AllTaxRatesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AllTaxRatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AllTaxRatesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/tax/rates";
    
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
        const res: operations.AllTaxRatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.allTaxRates200ApplicationJsonObjects = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.allTaxRates500ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
