import requests
from typing import List,Optional
from sdk.models import operations
from . import utils

class LanguageModelDirectAccess:
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

    
    def get_family_details(self, request: operations.GetFamilyDetailsRequest) -> operations.GetFamilyDetailsResponse:
        r"""Get family details
        Fetches and outputs metadata for a family from the Tisane language models.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/lm/family"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFamilyDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetFamilyDetails200ApplicationJSON])
                res.get_family_details_200_application_json_object = out

        return res

    
    def list_feature_values(self, request: operations.ListFeatureValuesRequest) -> operations.ListFeatureValuesResponse:
        r"""List feature values
        Lists feature values for a particular category of features. This allows obtaining all the values such as entity types, subtypes, abuse types and tags, and more.
        
        Returns the values as a JSON array of strings.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/values"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListFeatureValuesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.list_feature_values_200_application_json_strings = out

        return res

    
    def list_hypernyms(self, request: operations.ListHypernymsRequest) -> operations.ListHypernymsResponse:
        r"""List hypernyms
        Lists all hypernyms related to a family. A hypernym is a parent concent. E.g. \"vehicle\" is a hypernym of \"truck\".
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/hypernyms"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListHypernymsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[List[float]]])
                res.list_hypernyms_200_application_json_arrays = out

        return res

    
    def list_hyponyms(self, request: operations.ListHyponymsRequest) -> operations.ListHyponymsResponse:
        r"""List hyponyms
        Lists all hyponyms related to a family. A hyponym is a child concent. E.g. \"truck\" is a hypernym of \"vehicle\".
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/hyponyms"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListHyponymsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def list_inflected_forms(self, request: operations.ListInflectedFormsRequest) -> operations.ListInflectedFormsResponse:
        r"""List inflected forms
        List inflected forms
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/inflections"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListInflectedFormsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[operations.ListInflectedForms200ApplicationJSON]])
                res.list_inflected_forms_200_application_json_objects = out

        return res

    
    def list_word_senses(self, request: operations.ListWordSensesRequest) -> operations.ListWordSensesResponse:
        r"""List word senses
        Fetches and outputs all senses related to a word.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/senses"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListWordSensesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[operations.ListWordSenses200ApplicationJSON]])
                res.list_word_senses_200_application_json_objects = out

        return res

    