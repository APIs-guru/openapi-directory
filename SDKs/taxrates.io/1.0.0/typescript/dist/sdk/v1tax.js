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
var V1Tax = /** @class */ (function () {
    function V1Tax(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
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
    V1Tax.prototype.taxRatesByCountryCode = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.TaxRatesByCountryCodeRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v1/tax/countrycode";
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
                        res.taxRatesByCountryCode200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.taxRatesByCountryCode500ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
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
    V1Tax.prototype.taxRatesByIpAddress = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.TaxRatesByIpAddressRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v1/tax/ip";
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
                        res.taxRatesByIpAddress200ApplicationJsonObjects = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.taxRatesByIpAddress500ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return V1Tax;
}());
export { V1Tax };
