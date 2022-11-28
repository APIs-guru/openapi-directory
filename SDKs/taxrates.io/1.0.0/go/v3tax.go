package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type V3Tax struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewV3Tax(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *V3Tax {
	return &V3Tax{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// AllTaxRates - All tax rates
// <p>Get request. This method returns all tax rates configured on your account. Based on your country selection the endpoint will return all taxes for all countries. You can use the 'filter' parameter to narrow results to selected type of tax. Use 'zip' parameter when you have selected the United States.</p>
// <p>We have development an easy to use scheduler so you can call the API to get the rates every hour or day. Please click on the following link to see the <a href="https://gist.github.com/gregbird/cd904ff230cdf86253716aa351154edb">code on Github</a>.</p>
// <p><b>Please note</b> in cases when a US state doesn't have sales tax and when a product is tax exempt for a zip code or for a state the API response will be "null"</p>
// <p>To get a response you need to have selected a product code in your Taxrates.io dashboard, please see the Introduction section above for description of the different types of product codes.</p>
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
// <pre><code class="js">
//
//	var taxrates_endpoint = 'tax/rates';
//	var taxrates_params = {'domain':'api.taxrates.io'};
//	var taxrates_url = '/api/v3/';
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
//	    success: function (data, textStatus, jqXHR) {
//	      //Maintain errors inside success because the API may return 200 in general, but different code inside
//	        if(data.ErrorCode=='404' || data.ErrorCode=='500'){
//	          //Maintain errors here
//	          console.log(data.ErrorMessage);
//	          return false;
//	        }else{
//	          var rates = [];
//	          var i=0;
//	          var taxrates_range = '';
//	          jQuery.each(data, function(k, v) {
//	              if(v.hasOwnProperty("rates")){
//	                  jQuery.each(v.rates, function(m, w) {
//	                      rates[i] = [];
//	                      //Only showing standard rate type
//	                      if( w.Type == "standard" ){
//	                          rates[i][0] = w.Type;
//	                          rates[i][1] = w.data_value;
//	                          rates[i][2] = w.product_code;
//	                          i++;
//	                      }
//	                  });
//	              }
//	          }).fail(function(xhr) {
//	                  //Maintain your errors here
//	                  return false;
//	          });
//	          var cursor = jqXHR.getResponseHeader('X-Cursor-Next');
//	          if (cursor) {
//	            // get next page...
//	          }
//	          return true;
//	}else{
//	  //Not logged into taxrates.io
//	  //Maintain your errors here
//	  return false;
//	}</code></pre>
func (s *V3Tax) AllTaxRates(ctx context.Context, request operations.AllTaxRatesRequest) (*operations.AllTaxRatesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/tax/rates"

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

	res := &operations.AllTaxRatesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []operations.AllTaxRates200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AllTaxRates200ApplicationJSONObjects = out
		}
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.AllTaxRates500ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AllTaxRates500ApplicationJSONObject = out
		}
	}

	return res, nil
}
