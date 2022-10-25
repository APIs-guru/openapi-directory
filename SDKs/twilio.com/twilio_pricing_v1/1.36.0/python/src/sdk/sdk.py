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
    
    
    def fetch_messaging_country(self, request: operations.FetchMessagingCountryRequest) -> operations.FetchMessagingCountryResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_MESSAGING_COUNTRY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Messaging/Countries/{IsoCountry}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchMessagingCountryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PricingV1MessagingMessagingCountryInstance])
                res.pricing_v1_messaging_messaging_country_instance = out

        return res

    
    
    def fetch_phone_number_country(self, request: operations.FetchPhoneNumberCountryRequest) -> operations.FetchPhoneNumberCountryResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_PHONE_NUMBER_COUNTRY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/PhoneNumbers/Countries/{IsoCountry}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchPhoneNumberCountryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PricingV1PhoneNumberPhoneNumberCountryInstance])
                res.pricing_v1_phone_number_phone_number_country_instance = out

        return res

    
    
    def fetch_voice_country(self, request: operations.FetchVoiceCountryRequest) -> operations.FetchVoiceCountryResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_VOICE_COUNTRY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Voice/Countries/{IsoCountry}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchVoiceCountryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PricingV1VoiceVoiceCountryInstance])
                res.pricing_v1_voice_voice_country_instance = out

        return res

    
    
    def fetch_voice_number(self, request: operations.FetchVoiceNumberRequest) -> operations.FetchVoiceNumberResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_VOICE_NUMBER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Voice/Numbers/{Number}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchVoiceNumberResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PricingV1VoiceVoiceNumber])
                res.pricing_v1_voice_voice_number = out

        return res

    
    
    def list_messaging_country(self, request: operations.ListMessagingCountryRequest) -> operations.ListMessagingCountryResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_MESSAGING_COUNTRY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/Messaging/Countries"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListMessagingCountryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListMessagingCountryListMessagingCountryResponse])
                res.list_messaging_country_response = out

        return res

    
    
    def list_phone_number_country(self, request: operations.ListPhoneNumberCountryRequest) -> operations.ListPhoneNumberCountryResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_PHONE_NUMBER_COUNTRY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/PhoneNumbers/Countries"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListPhoneNumberCountryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPhoneNumberCountryListPhoneNumberCountryResponse])
                res.list_phone_number_country_response = out

        return res

    
    
    def list_voice_country(self, request: operations.ListVoiceCountryRequest) -> operations.ListVoiceCountryResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_VOICE_COUNTRY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/Voice/Countries"
        
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

    