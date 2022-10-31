import warnings
import requests
from typing import List,Optional
from sdk.models import operations
from . import utils


SERVERS = [
	"https://api.taxrates.io/api",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def all_tax_rates(self, request: operations.AllTaxRatesRequest) -> operations.AllTaxRatesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v3/tax/rates"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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

    
    def tax_rates_by_country_code(self, request: operations.TaxRatesByCountryCodeRequest) -> operations.TaxRatesByCountryCodeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/tax/countrycode"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TaxRatesByCountryCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.TaxRatesByCountryCode200ApplicationJSON])
                res.tax_rates_by_country_code_200_application_json_object = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.TaxRatesByCountryCode500ApplicationJSON])
                res.tax_rates_by_country_code_500_application_json_object = out

        return res

    
    def tax_rates_by_ip_address(self, request: operations.TaxRatesByIPAddressRequest) -> operations.TaxRatesByIPAddressResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/tax/ip"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TaxRatesByIPAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[operations.TaxRatesByIPAddress200ApplicationJSON]])
                res.tax_rates_by_ip_address_200_application_json_objects = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.TaxRatesByIPAddress500ApplicationJSON])
                res.tax_rates_by_ip_address_500_application_json_object = out

        return res

    