import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://pricing.twilio.com",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def fetch_trunking_country(self, request: operations.FetchTrunkingCountryRequest) -> operations.FetchTrunkingCountryResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_TRUNKING_COUNTRY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Trunking/Countries/{IsoCountry}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchTrunkingCountryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PricingV2TrunkingCountryInstance])
                res.pricing_v2_trunking_country_instance = out

        return res

    
    def fetch_trunking_number(self, request: operations.FetchTrunkingNumberRequest) -> operations.FetchTrunkingNumberResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_TRUNKING_NUMBER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Trunking/Numbers/{DestinationNumber}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchTrunkingNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PricingV2TrunkingNumber])
                res.pricing_v2_trunking_number = out

        return res

    
    def fetch_voice_country(self, request: operations.FetchVoiceCountryRequest) -> operations.FetchVoiceCountryResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_VOICE_COUNTRY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Voice/Countries/{IsoCountry}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchVoiceCountryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PricingV2VoiceVoiceCountryInstance])
                res.pricing_v2_voice_voice_country_instance = out

        return res

    
    def fetch_voice_number(self, request: operations.FetchVoiceNumberRequest) -> operations.FetchVoiceNumberResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_VOICE_NUMBER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Voice/Numbers/{DestinationNumber}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchVoiceNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PricingV2VoiceVoiceNumber])
                res.pricing_v2_voice_voice_number = out

        return res

    
    def list_trunking_country(self, request: operations.ListTrunkingCountryRequest) -> operations.ListTrunkingCountryResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_TRUNKING_COUNTRY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v2/Trunking/Countries"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListTrunkingCountryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListTrunkingCountryListTrunkingCountryResponse])
                res.list_trunking_country_response = out

        return res

    
    def list_voice_country(self, request: operations.ListVoiceCountryRequest) -> operations.ListVoiceCountryResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_VOICE_COUNTRY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v2/Voice/Countries"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListVoiceCountryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListVoiceCountryListVoiceCountryResponse])
                res.list_voice_country_response = out

        return res

    