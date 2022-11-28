import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Tweets:
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

    
    def find_tweet_by_id(self, request: operations.FindTweetByIDRequest) -> operations.FindTweetByIDResponse:
        r"""Returns hydrated Tweet objects
        Returns a variety of information about the Tweet specified by the requested ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/labs/2/tweets/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FindTweetByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SingleTweetLookupResponse])
                res.single_tweet_lookup_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem = out

        return res

    
    def find_tweets_by_id(self, request: operations.FindTweetsByIDRequest) -> operations.FindTweetsByIDResponse:
        r"""Returns hydrated Tweet objects
        Returns a variety of information about the Tweet specified by the requested ID
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/labs/2/tweets"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FindTweetsByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TweetLookupResponse])
                res.tweet_lookup_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem = out

        return res

    