import requests
from sdk.models import operations
from . import utils

class Word:
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

    
    def get_audio(self, request: operations.GetAudioRequest) -> operations.GetAudioResponse:
        r"""Fetches audio metadata for a word.
        The metadata includes a time-expiring fileUrl which allows reading the audio file directly from the API.  Currently only audio pronunciations from the American Heritage Dictionary in mp3 format are supported.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/word.json/{word}/audio", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAudioResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_definitions(self, request: operations.GetDefinitionsRequest) -> operations.GetDefinitionsResponse:
        r"""Return definitions for a word
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/word.json/{word}/definitions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDefinitionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_etymologies(self, request: operations.GetEtymologiesRequest) -> operations.GetEtymologiesResponse:
        r"""Fetches etymology data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/word.json/{word}/etymologies", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEtymologiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_examples(self, request: operations.GetExamplesRequest) -> operations.GetExamplesResponse:
        r"""Returns examples for a word
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/word.json/{word}/examples", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetExamplesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_hyphenation(self, request: operations.GetHyphenationRequest) -> operations.GetHyphenationResponse:
        r"""Returns syllable information for a word
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/word.json/{word}/hyphenation", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHyphenationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_phrases(self, request: operations.GetPhrasesRequest) -> operations.GetPhrasesResponse:
        r"""Fetches bi-gram phrases for a word
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/word.json/{word}/phrases", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPhrasesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_related_words(self, request: operations.GetRelatedWordsRequest) -> operations.GetRelatedWordsResponse:
        r"""Given a word as a string, returns relationships from the Word Graph
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/word.json/{word}/relatedWords", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRelatedWordsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_scrabble_score(self, request: operations.GetScrabbleScoreRequest) -> operations.GetScrabbleScoreResponse:
        r"""Returns the Scrabble score for a word
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/word.json/{word}/scrabbleScore", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetScrabbleScoreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_text_pronunciations(self, request: operations.GetTextPronunciationsRequest) -> operations.GetTextPronunciationsResponse:
        r"""Returns text pronunciations for a given word
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/word.json/{word}/pronunciations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTextPronunciationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_top_example(self, request: operations.GetTopExampleRequest) -> operations.GetTopExampleResponse:
        r"""Returns a top example for a word
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/word.json/{word}/topExample", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTopExampleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_word_frequency(self, request: operations.GetWordFrequencyRequest) -> operations.GetWordFrequencyResponse:
        r"""Returns word usage over time
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/word.json/{word}/frequency", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWordFrequencyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    