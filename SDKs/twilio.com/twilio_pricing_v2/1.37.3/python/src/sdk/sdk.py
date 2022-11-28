

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://pricing.twilio.com",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def fetch_trunking_country(self, request: operations.FetchTrunkingCountryRequest) -> operations.FetchTrunkingCountryResponse:
        r"""Fetch a specific Country.
        """
        
        base_url = operations.FETCH_TRUNKING_COUNTRY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Trunking/Countries/{IsoCountry}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchTrunkingCountryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PricingV2TrunkingCountryInstance])
                res.pricing_v2_trunking_country_instance = out

        return res

    
    def fetch_trunking_number(self, request: operations.FetchTrunkingNumberRequest) -> operations.FetchTrunkingNumberResponse:
        r"""Fetch pricing information for a specific destination and, optionally, origination phone number.
        """
        
        base_url = operations.FETCH_TRUNKING_NUMBER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Trunking/Numbers/{DestinationNumber}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchTrunkingNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PricingV2TrunkingNumber])
                res.pricing_v2_trunking_number = out

        return res

    
    def fetch_voice_country(self, request: operations.FetchVoiceCountryRequest) -> operations.FetchVoiceCountryResponse:
        r"""Fetch a specific Country.
        """
        
        base_url = operations.FETCH_VOICE_COUNTRY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Voice/Countries/{IsoCountry}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchVoiceCountryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PricingV2VoiceVoiceCountryInstance])
                res.pricing_v2_voice_voice_country_instance = out

        return res

    
    def fetch_voice_number(self, request: operations.FetchVoiceNumberRequest) -> operations.FetchVoiceNumberResponse:
        r"""Fetch pricing information for a specific destination and, optionally, origination phone number.
        """
        
        base_url = operations.FETCH_VOICE_NUMBER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v2/Voice/Numbers/{DestinationNumber}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchVoiceNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PricingV2VoiceVoiceNumber])
                res.pricing_v2_voice_voice_number = out

        return res

    
    def list_trunking_country(self, request: operations.ListTrunkingCountryRequest) -> operations.ListTrunkingCountryResponse:
        base_url = operations.LIST_TRUNKING_COUNTRY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v2/Trunking/Countries"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListTrunkingCountryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListTrunkingCountryListTrunkingCountryResponse])
                res.list_trunking_country_response = out

        return res

    
    def list_voice_country(self, request: operations.ListVoiceCountryRequest) -> operations.ListVoiceCountryResponse:
        base_url = operations.LIST_VOICE_COUNTRY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v2/Voice/Countries"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListVoiceCountryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListVoiceCountryListVoiceCountryResponse])
                res.list_voice_country_response = out

        return res

    