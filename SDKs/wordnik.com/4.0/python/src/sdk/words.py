import requests
from sdk.models import operations
from . import utils

class Words:
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

    
    def get_random_word(self, request: operations.GetRandomWordRequest) -> operations.GetRandomWordResponse:
        r"""Returns a single random WordObject
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/words.json/randomWord"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRandomWordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_random_words(self, request: operations.GetRandomWordsRequest) -> operations.GetRandomWordsResponse:
        r"""Returns an array of random WordObjects
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/words.json/randomWords"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRandomWordsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_word_of_the_day(self, request: operations.GetWordOfTheDayRequest) -> operations.GetWordOfTheDayResponse:
        r"""Returns a specific WordOfTheDay
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/words.json/wordOfTheDay"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWordOfTheDayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def reverse_dictionary(self, request: operations.ReverseDictionaryRequest) -> operations.ReverseDictionaryResponse:
        r"""Reverse dictionary search
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/words.json/reverseDictionary"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReverseDictionaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def search_words(self, request: operations.SearchWordsRequest) -> operations.SearchWordsResponse:
        r"""Searches words
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/words.json/search/{query}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchWordsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    