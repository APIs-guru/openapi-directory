import requests
from typing import List,Optional
from sdk.models import operations
from . import utils

class V3Tax:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def all_tax_rates(self, request: operations.AllTaxRatesRequest) -> operations.AllTaxRatesResponse:
        r"""All tax rates
        <p>Get request. This method returns all tax rates configured on your account. Based on your country selection the endpoint will return all taxes for all countries. You can use the 'filter' parameter to narrow results to selected type of tax. Use 'zip' parameter when you have selected the United States.</p>
        <p>We have development an easy to use scheduler so you can call the API to get the rates every hour or day. Please click on the following link to see the <a href=\"https://gist.github.com/gregbird/cd904ff230cdf86253716aa351154edb\">code on Github</a>.</p>
        <p><b>Please note</b> in cases when a US state doesn't have sales tax and when a product is tax exempt for a zip code or for a state the API response will be \"null\"</p>
        <p>To get a response you need to have selected a product code in your Taxrates.io dashboard, please see the Introduction section above for description of the different types of product codes.</p>
        <p>For US sales tax you can filter the tax rate you want for each state or zip code with one of the following: (they are case sensitive)</p>
        <ul>
          <li>CombinedRate</li>
          <li>StateRate</li>
          <li>CountyRate</li>
          <li>CityRate</li>
          <li>SpecialRate</li>
        </ul>
        <pre><code class=\"js\">
          var taxrates_endpoint = 'tax/rates';
          var taxrates_params = {'domain':'api.taxrates.io'};
          var taxrates_url = '/api/v3/';
          if ( localStorage.getItem(\"Taxrates_API_Client_Secret\") ){
          jQuery.support.cors = true;
          jQuery.ajax({
              url: taxrates_url+taxrates_endpoint,
              type: 'get',
              method: 'get',
              dataType: \"json\",
              data: taxrates_params,
              beforeSend: function (request) {
                      request.withCredentials = true;
                      request.setRequestHeader(\"Authorization\", \"Apikey \" + localStorage.getItem(\"Taxrates_API_Client_Secret\"));
              },
              headers: {
                \"accept\": \"application/json\"
              },
              contentType: 'application/json; charset=utf-8',
              success: function (data, textStatus, jqXHR) {
                //Maintain errors inside success because the API may return 200 in general, but different code inside
                  if(data.ErrorCode=='404' || data.ErrorCode=='500'){
                    //Maintain errors here
                    console.log(data.ErrorMessage);
                    return false;
                  }else{
                    var rates = [];
                    var i=0;
                    var taxrates_range = '';
                    jQuery.each(data, function(k, v) {
                        if(v.hasOwnProperty(\"rates\")){
                            jQuery.each(v.rates, function(m, w) {
                                rates[i] = [];
                                //Only showing standard rate type
                                if( w.Type == \"standard\" ){
                                    rates[i][0] = w.Type;
                                    rates[i][1] = w.data_value;
                                    rates[i][2] = w.product_code;
                                    i++;
                                }
                            });
                        }
                    }).fail(function(xhr) {
                            //Maintain your errors here
                            return false;
                    });
                    var cursor = jqXHR.getResponseHeader('X-Cursor-Next');
                    if (cursor) {
                      // get next page...
                    }
                    return true;
          }else{
            //Not logged into taxrates.io
            //Maintain your errors here
            return false;
          }</code></pre>
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/tax/rates"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AllTaxRatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[operations.AllTaxRates200ApplicationJSON]])
                res.all_tax_rates_200_application_json_objects = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AllTaxRates500ApplicationJSON])
                res.all_tax_rates_500_application_json_object = out

        return res

    