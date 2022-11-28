

import requests
from sdk.models import operations
from . import utils




SERVERS = [
	"https://randommer.io",
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
        
    
    
    
    def get_api_card(self, request: operations.GetAPICardRequest) -> operations.GetAPICardResponse:
        r"""Get Card
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Card"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPICardResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_api_card_types(self, request: operations.GetAPICardTypesRequest) -> operations.GetAPICardTypesResponse:
        r"""Get available card types
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Card/Types"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPICardTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_api_misc_cultures(self, request: operations.GetAPIMiscCulturesRequest) -> operations.GetAPIMiscCulturesResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Misc/Cultures"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIMiscCulturesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_api_misc_random_address(self, request: operations.GetAPIMiscRandomAddressRequest) -> operations.GetAPIMiscRandomAddressResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Misc/Random-Address"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIMiscRandomAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_api_name(self, request: operations.GetAPINameRequest) -> operations.GetAPINameResponse:
        r"""Get name
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Name"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPINameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_api_name_suggestions(self, request: operations.GetAPINameSuggestionsRequest) -> operations.GetAPINameSuggestionsResponse:
        r"""Get business name suggestions
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Name/Suggestions"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPINameSuggestionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_api_phone_countries(self, request: operations.GetAPIPhoneCountriesRequest) -> operations.GetAPIPhoneCountriesResponse:
        r"""Get available countries
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Phone/Countries"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIPhoneCountriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_api_phone_generate(self, request: operations.GetAPIPhoneGenerateRequest) -> operations.GetAPIPhoneGenerateResponse:
        r"""Get bulk telephone numbers for a country
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Phone/Generate"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIPhoneGenerateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_api_phone_validate(self, request: operations.GetAPIPhoneValidateRequest) -> operations.GetAPIPhoneValidateResponse:
        r"""Validate a phone number
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Phone/Validate"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIPhoneValidateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_api_social_number(self, request: operations.GetAPISocialNumberRequest) -> operations.GetAPISocialNumberResponse:
        r"""Generate a social security number
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/SocialNumber"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPISocialNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_api_text_lorem_ipsum(self, request: operations.GetAPITextLoremIpsumRequest) -> operations.GetAPITextLoremIpsumResponse:
        r"""Generate lorem ipsum
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Text/LoremIpsum"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPITextLoremIpsumResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_api_text_password(self, request: operations.GetAPITextPasswordRequest) -> operations.GetAPITextPasswordResponse:
        r"""Generate password
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Text/Password"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPITextPasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_api_social_number(self, request: operations.PostAPISocialNumberRequest) -> operations.PostAPISocialNumberResponse:
        r"""Validate VAT/identity numbers
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/SocialNumber"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPISocialNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_api_text_humanize(self, request: operations.PostAPITextHumanizeRequest) -> operations.PostAPITextHumanizeResponse:
        r"""Humanize text
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Text/Humanize"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPITextHumanizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_api_text_transform(self, request: operations.PostAPITextTransformRequest) -> operations.PostAPITextTransformResponse:
        r"""Transform text
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Text/Transform"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPITextTransformResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    