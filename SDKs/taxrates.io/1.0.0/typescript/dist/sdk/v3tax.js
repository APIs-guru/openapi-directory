var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
var V3Tax = /** @class */ (function () {
    function V3Tax(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
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
    V3Tax.prototype.allTaxRates = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AllTaxRatesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v3/tax/rates";
        var client = this._defaultClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.allTaxRates200ApplicationJsonObjects = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.allTaxRates500ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return V3Tax;
}());
export { V3Tax };
