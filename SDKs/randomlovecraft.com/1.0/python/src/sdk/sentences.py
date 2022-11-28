import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Sentences:
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

    
    def get_sentences(self, request: operations.GetSentencesRequest) -> operations.GetSentencesResponse:
        r"""A random sentence
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sentences"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSentencesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSentences200ApplicationJSON])
                res.get_sentences_200_application_json_object = out

        return res

    
    def get_sentences_from_book(self, request: operations.GetSentencesFromBookRequest) -> operations.GetSentencesFromBookResponse:
        r"""Random sentences from a specific book
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/books/{id}/sentences", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSentencesFromBookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSentencesFromBook200ApplicationJSON])
                res.get_sentences_from_book_200_application_json_object = out

        return res

    
    def get_specific_sentence(self, request: operations.GetSpecificSentenceRequest) -> operations.GetSpecificSentenceResponse:
        r"""A specific sentence
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sentences/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSpecificSentenceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSpecificSentence200ApplicationJSON])
                res.get_specific_sentence_200_application_json_object = out

        return res

    