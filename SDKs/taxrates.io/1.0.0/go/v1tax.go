package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type V1Tax struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewV1Tax(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *V1Tax {
	return &V1Tax{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// TaxRatesByCountryCode - Tax rates by Country Code
// Get request. This method returns all tax rates for country discovered based on country code. The country code must be 2 letters ISO 3166-1 alfa-2 country code (see <a href="https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes">here</a> for more information). You can use 'filter' parameter to narrow results to selected type of tax
// <p>For US sales tax you can filter the tax rate you want for each state or zip code with one of the following: (they are case sensitive)</p>
// <ul>
//
//	<li>CombinedRate</li>
//	<li>StateRate</li>
//	<li>CountyRate</li>
//	<li>CityRate</li>
//	<li>SpecialRate</li>
//
// </ul>
// <pre><code class="js">var taxrates_endpoint = 'tax/countrycode';
//
//	var taxrates_params = {'domain':'api.taxrates.io', 'country_code':'IE', 'product_code':'C010'};
//	var taxrates_url = '/api/v1/';
//	if ( localStorage.getItem("Taxrates_API_Client_Secret") ){
//	jQuery.support.cors = true;
//	jQuery.ajax({
//	    url: taxrates_url+taxrates_endpoint,
//	    type: 'get',
//	    method: 'get',
//	    dataType: "json",
//	    data: taxrates_params,
//	    beforeSend: function (request) {
//	            request.withCredentials = true;
//	            request.setRequestHeader("Authorization", "Apikey " + localStorage.getItem("Taxrates_API_Client_Secret"));
//	    },
//	    headers: {
//	      "accept": "application/json"
//	    },
//	    contentType: 'application/json; charset=utf-8',
//	    success: function (data) {
//	      //Maintain errors inside success because the API may return 200 in general, but different code inside
//	        if(data.ErrorCode=='404' || data.ErrorCode=='500'){
//	          //Maintain errors here
//	          console.log(data.ErrorMessage);
//	          return false;
//	        }else{
//	          var rates = [];
//	          var i=0;
//	          jQuery.each(data, function(k, v) {
//	              if(v.hasOwnProperty("taxes")){
//	                  jQuery.each(v.taxes, function(m, w) {
//	                      rates[i] = [];
//	                      //Only showing standard rate type
//	                      if( w.Type == "standard" ){
//	                          rates[i][0] = w.Country;
//	                          rates[i][1] = w.Type;
//	                          rates[i][2] = w.data_value;
//	                          i++;
//	                      }
//	                  });
//	              }
//	          //Now you have all your rates inside rates variable.
//	          }).fail(function(xhr) {
//	                  //Maintain your errors here
//	                  return false;
//	          });
//	          return true;
//	}else{
//	  //Not logged into taxrates.io
//	  //Maintain your errors here
//	  return false;
//	}</code></pre>
func (s *V1Tax) TaxRatesByCountryCode(ctx context.Context, request operations.TaxRatesByCountryCodeRequest) (*operations.TaxRatesByCountryCodeResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/tax/countrycode"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TaxRatesByCountryCodeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.TaxRatesByCountryCode200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TaxRatesByCountryCode200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.TaxRatesByCountryCode500ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TaxRatesByCountryCode500ApplicationJSONObject = out
		}
	}

	return res, nil
}

// TaxRatesByIPAddress - Tax rates by IP address
// Get request. This method returns all tax rates for country discovered on either your IP address or IP address param. The IP param is not required. When empty, the taxrates.io will try to discover your IP address and based on this will retrieve the tax rates. You can use 'filter' parameter to narrow results to selected type of tax
// <p>For US sales tax you can filter the tax rate you want for each state or zip code with one of the following: (they are case sensitive)</p>
// <ul>
//
//	<li>CombinedRate</li>
//	<li>StateRate</li>
//	<li>CountyRate</li>
//	<li>CityRate</li>
//	<li>SpecialRate</li>
//
// </ul>
// <pre><code class="js">var taxrates_endpoint = 'tax/ip';
//
//	var taxrates_params = {'domain':'api.taxrates.io', 'ip':'208.80.152.201', 'product_code':'C010'};
//	var taxrates_url = '/api/v1/';
//	if ( localStorage.getItem("Taxrates_API_Client_Secret") ){
//	jQuery.support.cors = true;
//	jQuery.ajax({
//	    url: taxrates_url+taxrates_endpoint,
//	    type: 'get',
//	    method: 'get',
//	    dataType: "json",
//	    data: taxrates_params,
//	    beforeSend: function (request) {
//	            request.withCredentials = true;
//	            request.setRequestHeader("Authorization", "Apikey " + localStorage.getItem("Taxrates_API_Client_Secret"));
//	    },
//	    headers: {
//	      "accept": "application/json"
//	    },
//	    contentType: 'application/json; charset=utf-8',
//	    success: function (data) {
//	      //Maintain errors inside success because the API may return 200 in general, but different code inside
//	        if(data.ErrorCode=='404' || data.ErrorCode=='500'){
//	          //Maintain errors here
//	          console.log(data.ErrorMessage);
//	          return false;
//	        }else{
//	          var rates = [];
//	          var i=0;
//	          jQuery.each(data, function(k, v) {
//	              if(v.hasOwnProperty("taxes")){
//	                  jQuery.each(v.taxes, function(m, w) {
//	                      rates[i] = [];
//	                      //Only showing standard rate type
//	                      if( w.Type == "standard" ){
//	                          rates[i][0] = w.Country;
//	                          rates[i][1] = w.Type;
//	                          rates[i][2] = w.data_value;
//	                          i++;
//	                      }
//	                  });
//	              }
//	          //Now you have all your rates inside rates variable.
//	          }).fail(function(xhr) {
//	                  //Maintain your errors here
//	                  return false;
//	          });
//	          return true;
//	}else{
//	  //Not logged into taxrates.io
//	  //Maintain your errors here
//	  return false;
//	}</code></pre>
func (s *V1Tax) TaxRatesByIPAddress(ctx context.Context, request operations.TaxRatesByIPAddressRequest) (*operations.TaxRatesByIPAddressResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/tax/ip"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TaxRatesByIPAddressResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []operations.TaxRatesByIPAddress200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TaxRatesByIPAddress200ApplicationJSONObjects = out
		}
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.TaxRatesByIPAddress500ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TaxRatesByIPAddress500ApplicationJSONObject = out
		}
	}

	return res, nil
}
