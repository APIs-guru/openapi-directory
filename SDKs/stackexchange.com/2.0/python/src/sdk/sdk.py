
__doc__ = """ SDK Documentation: https://api.stackexchange.com/"""
import requests
from typing import Any
from sdk.models import operations
from . import utils




SERVERS = [
	"https://api.stackexchange.com/2.0",
]


class SDK:
    r"""SDK Documentation: https://api.stackexchange.com/"""

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
        
    
    
    
    def get_access_tokens_access_tokens_(self, request: operations.GetAccessTokensAccessTokensRequest) -> operations.GetAccessTokensAccessTokensResponse:
        r"""Reads the properties for a set of access tokens.
         
        {accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.
         
        This method returns a list of access_tokens.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/access-tokens/{accessTokens}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccessTokensAccessTokensResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_access_tokens_access_tokens_invalidate(self, request: operations.GetAccessTokensAccessTokensInvalidateRequest) -> operations.GetAccessTokensAccessTokensInvalidateResponse:
        r"""Immediately expires the access tokens passed. This method is meant to allow an application to discard any active access tokens it no longer needs.
         
        {accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.
         
        This method returns a list of access_tokens.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/access-tokens/{accessTokens}/invalidate", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccessTokensAccessTokensInvalidateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_answers(self, request: operations.GetAnswersRequest) -> operations.GetAnswersResponse:
        r"""Returns all the undeleted answers in the system.
         
        The sorts accepted by this method operate on the follow fields of the answer object:
         - activity - last_activity_date
         - creation - creation_date
         - votes - score
          activity is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of answers.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/answers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnswersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_answers_ids_(self, request: operations.GetAnswersIdsRequest) -> operations.GetAnswersIdsResponse:
        r"""Gets the set of answers identified by ids.
         
        This is meant for batch fetcing of questions. A useful trick to poll for updates is to sort by activity, with a minimum date of the last time you polled.
         
        {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for answer_id on answer objects.
         
        The sorts accepted by this method operate on the follow fields of the answer object:
         - activity - last_activity_date
         - creation - creation_date
         - votes - score
          activity is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of answers.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/answers/{ids}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnswersIdsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_answers_ids_comments(self, request: operations.GetAnswersIdsCommentsRequest) -> operations.GetAnswersIdsCommentsResponse:
        r"""Gets the comments on a set of answers.
         
        If you know that you have an answer id and need the comments, use this method. If you know you have a question id, use /questions/{id}/comments. If you are unsure, use /posts/{id}/comments.
         
        {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for answer_id on answer objects.
         
        The sorts accepted by this method operate on the follow fields of the comment object:
         - creation - creation_date
         - votes - score
          creation is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of comments.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/answers/{ids}/comments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnswersIdsCommentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_apps_access_tokens_de_authenticate(self, request: operations.GetAppsAccessTokensDeAuthenticateRequest) -> operations.GetAppsAccessTokensDeAuthenticateResponse:
        r"""Passing valid access_tokens to this method causes the application that created them to be de-authorized by the user associated with each access_token. This will remove the application from their apps tab, and cause all other existing access_tokens to be destroyed.
         
        This method is meant for uninstalling applications, recovering from access_token leaks, or simply as a stronger form of /access-tokens/{accessTokens}/invalidate.
         
        Nothing prevents a user from re-authenticate to an application that has de-authenticated itself, the user will be prompted to approve the application again however.
         
        {accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.
         
        This method returns a list of access_tokens.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apps/{accessTokens}/de-authenticate", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAppsAccessTokensDeAuthenticateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_badges(self, request: operations.GetBadgesRequest) -> operations.GetBadgesResponse:
        r"""Returns all the badges in the system.
         
        Badge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.
         
        This means that you can get a list of all tag based badges by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.
         
        For ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
         
        rank is the default sort.
         
        This method returns a list of badges.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/badges"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBadgesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_badges_ids_(self, request: operations.GetBadgesIdsRequest) -> operations.GetBadgesIdsResponse:
        r"""Gets the badges identified in id.
         
        Note that badge ids are not constant across sites, and thus should be looked up via the /badges method. A badge id on a single site is, however, guaranteed to be stable.
         
        Badge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.
         
        This means that you can get a list of all tag based badges by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.
         
        For ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
         
        rank is the default sort.
         
        {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for badge_id on badge objects.
         
        This method returns a list of badges.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/badges/{ids}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBadgesIdsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_badges_ids_recipients(self, request: operations.GetBadgesIdsRecipientsRequest) -> operations.GetBadgesIdsRecipientsResponse:
        r"""Returns recently awarded badges in the system, constrained to a certain set of badges.
         
        As these badges have been awarded, they will have the badge.user property set.
         
        {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for badge_id on badge objects.
         
        This method returns a list of badges.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/badges/{ids}/recipients", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBadgesIdsRecipientsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_badges_name(self, request: operations.GetBadgesNameRequest) -> operations.GetBadgesNameResponse:
        r"""Gets all explicitly named badges in the system.
         
        A named badged stands in opposition to a tag-based badge. These are referred to as general badges on the sites themselves.
         
        For the rank sort, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
         
        rank is the default sort.
         
        This method returns a list of badges.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/badges/name"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBadgesNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_badges_recipients(self, request: operations.GetBadgesRecipientsRequest) -> operations.GetBadgesRecipientsResponse:
        r"""Returns recently awarded badges in the system.
         
        As these badges have been awarded, they will have the badge.user property set.
         
        This method returns a list of badges.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/badges/recipients"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBadgesRecipientsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_badges_tags(self, request: operations.GetBadgesTagsRequest) -> operations.GetBadgesTagsResponse:
        r"""Returns the badges that are awarded for participation in specific tags.
         
        For the rank sort, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
         
        rank is the default sort.
         
        This method returns a list of badges.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/badges/tags"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBadgesTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_comments(self, request: operations.GetCommentsRequest) -> operations.GetCommentsResponse:
        r"""Gets all the comments on the site.
         
        If you're filtering for interesting comments (by score, creation date, etc.) make use of the sort paramter with appropriate min and max values.
         
        If you're looking to query conversations between users, instead use the /users/{ids}/mentioned and /users/{ids}/comments/{toid} methods.
         
        The sorts accepted by this method operate on the follow fields of the comment object:
         - creation - creation_date
         - votes - score
          creation is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of comments.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/comments"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_comments_ids_(self, request: operations.GetCommentsIdsRequest) -> operations.GetCommentsIdsResponse:
        r"""Gets the comments identified in id.
         
        This method is most useful if you have a cache of comment ids obtained through other means (such as /questions/{id}/comments) but suspect the data may be stale.
         
        {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for comment_id on comment objects.
         
        The sorts accepted by this method operate on the follow fields of the comment object:
         - creation - creation_date
         - votes - score
          creation is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of comments.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/comments/{ids}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommentsIdsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_errors(self, request: operations.GetErrorsRequest) -> operations.GetErrorsResponse:
        r"""Returns the various error codes that can be produced by the API.
         
        This method is provided for discovery, documentation, and testing purposes, it is not expected many applications will consume it during normal operation.
         
        For testing purposes, look into the /errors/{id} method which simulates errors given a code.
         
        This method returns a list of errors.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/errors"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetErrorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_errors_id_(self, request: operations.GetErrorsIDRequest) -> operations.GetErrorsIDResponse:
        r"""This method allows you to generate an error.
         
        This method is only intended for use when testing an application or library. Unlike other methods in the API, its contract is not frozen, and new error codes may be added at any time.
         
        This method results in an error, which will be expressed with a 400 HTTP status code and setting the error* properties on the wrapper object.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/errors/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetErrorsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_events(self, request: operations.GetEventsRequest) -> operations.GetEventsResponse:
        r"""Returns a stream of events that have occurred on the site.
         
        The API considers the following \"events\":
         - posting a question
         - posting an answer
         - posting a comment
         - editing a post
         - creating a user
        
          
        
         
        Events are only accessible for 15 minutes after they occurred, and by default only events in the last 5 minutes are returned. You can specify the age of the oldest event returned by setting the since parameter.
         
        It is advised that developers batch events by ids and make as few subsequent requests to other methods as possible.
         
        This method returns a list of events.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/events"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_filters_create(self, request: operations.GetFiltersCreateRequest) -> operations.GetFiltersCreateResponse:
        r"""Creates a new filter given a list of includes, excludes, a base filter, and whether or not this filter should be \"unsafe\".
         
        Filter \"safety\" is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
         
        If no base filter is specified, the default filter is assumed. When building a filter from scratch, the none built-in filter is useful.
         
        When the size of the parameters being sent to this method grows to large, problems can occur. This method will accept POST requests to mitigate this.
         
        It is not expected that many applications will call this method at runtime, filters should be pre-calculated and \"baked in\" in the common cases. Furthermore, there are a number of built-in filters which cover common use cases.
         
        This method returns a single filter.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/filters/create"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFiltersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_filters_filters_(self, request: operations.GetFiltersFiltersRequest) -> operations.GetFiltersFiltersResponse:
        r"""Returns the fields included by the given filters, and the \"safeness\" of those filters.
         
        It is not expected that this method will be consumed by many applications at runtime, it is provided to aid in debugging.
         
        {filters} can contain up to 20 semicolon delimited filters. Filters are obtained via calls to /filters/create, or by using a built-in filter.
         
        This method returns a list of filters.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/filters/{filters}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFiltersFiltersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_inbox(self, request: operations.GetInboxRequest) -> operations.GetInboxResponse:
        r"""Returns a user's inbox.
         
        This method requires an access_token, with a scope containing \"read_inbox\".
         
        This method returns a list of inbox items.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/inbox"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInboxResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_inbox_unread(self, request: operations.GetInboxUnreadRequest) -> operations.GetInboxUnreadResponse:
        r"""Returns the unread items in a user's inbox.
         
        This method requires an access_token, with a scope containing \"read_inbox\".
         
        This method returns a list of inbox items.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/inbox/unread"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInboxUnreadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_info(self, request: operations.GetInfoRequest) -> operations.GetInfoResponse:
        r"""Returns a collection of statistics about the site.
         
        Data to facilitate per-site customization, discover related sites, and aggregate statistics is all returned by this method.
         
        This data is cached very aggressively, by design. Query sparingly, ideally no more than once an hour.
         
        This method returns an info object.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/info"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_me(self, request: operations.GetMeRequest) -> operations.GetMeResponse:
        r"""Returns the user associated with the passed access_token.
         
        This method returns a user.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_me_answers(self, request: operations.GetMeAnswersRequest) -> operations.GetMeAnswersResponse:
        r"""Returns the answers owned by the user associated with the given access_token.
         
        This method returns a list of answers.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/answers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeAnswersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_me_associated(self, request: operations.GetMeAssociatedRequest) -> operations.GetMeAssociatedResponse:
        r"""Returns all of a user's associated accounts, given an access_token for them.
         
        This method returns a list of network users.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/associated"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeAssociatedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_me_badges(self, request: operations.GetMeBadgesRequest) -> operations.GetMeBadgesResponse:
        r"""Returns the badges earned by the user associated with the given access_token.
         
        This method returns a list of badges.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/badges"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeBadgesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_me_comments(self, request: operations.GetMeCommentsRequest) -> operations.GetMeCommentsResponse:
        r"""Returns the comments owned by the user associated with the given access_token.
         
        This method returns a list of comments.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/comments"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeCommentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_me_comments_to_id_(self, request: operations.GetMeCommentsToIDRequest) -> operations.GetMeCommentsToIDResponse:
        r"""Returns the comments owned by the user associated with the given access_token that are in reply to the user identified by {toId}.
         
        This method returns a list of comments.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/comments/{toId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeCommentsToIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_me_favorites(self, request: operations.GetMeFavoritesRequest) -> operations.GetMeFavoritesResponse:
        r"""Returns the questions favorites by the user associated with the given access_token.
         
        This method returns a list of questions.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/favorites"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeFavoritesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_me_inbox(self, request: operations.GetMeInboxRequest) -> operations.GetMeInboxResponse:
        r"""Returns the user identified by access_token's inbox.
         
        This method requires an access_token, with a scope containing \"read_inbox\".
         
        This method returns a list of inbox items.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/inbox"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeInboxResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_me_inbox_unread(self, request: operations.GetMeInboxUnreadRequest) -> operations.GetMeInboxUnreadResponse:
        r"""Returns the unread items in the user identified by access_token's inbox.
         
        This method requires an access_token, with a scope containing \"read_inbox\".
         
        This method returns a list of inbox items.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/inbox/unread"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeInboxUnreadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_me_mentioned(self, request: operations.GetMeMentionedRequest) -> operations.GetMeMentionedResponse:
        r"""Returns the comments mentioning the user associated with the given access_token.
         
        This method returns a list of comments.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/mentioned"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeMentionedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_me_merges(self, request: operations.GetMeMergesRequest) -> operations.GetMeMergesResponse:
        r"""Returns a record of merges that have occurred involving a user identified by an access_token.
         
        This method allows you to take now invalid account ids and find what account they've become, or take currently valid account ids and find which ids were equivalent in the past.
         
        This is most useful when confirming that an account_id is in fact \"new\" to an application.
         
        Account merges can happen for a wide range of reasons, applications should not make assumptions that merges have particular causes.
         
        Note that accounts are managed at a network level, users on a site may be merged due to an account level merge but there is no guarantee that a merge has an effect on any particular site.
         
        This method returns a list of account_merge.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/merges"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeMergesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_me_notifications(self, request: operations.GetMeNotificationsRequest) -> operations.GetMeNotificationsResponse:
        r"""Returns a user's notifications, given an access_token.
         
        This method requires an access_token, with a scope containing \"read_inbox\".
         
        This method returns a list of notifications.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/notifications"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeNotificationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_me_notifications_unread(self, request: operations.GetMeNotificationsUnreadRequest) -> operations.GetMeNotificationsUnreadResponse:
        r"""Returns a user's unread notifications, given an access_token.
         
        This method requires an access_token, with a scope containing \"read_inbox\".
         
        This method returns a list of notifications.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/notifications/unread"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeNotificationsUnreadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_me_privileges(self, request: operations.GetMePrivilegesRequest) -> operations.GetMePrivilegesResponse:
        r"""Returns the privileges the user identified by access_token has.
         
        This method returns a list of privileges.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/privileges"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMePrivilegesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_me_questions(self, request: operations.GetMeQuestionsRequest) -> operations.GetMeQuestionsResponse:
        r"""Returns the questions owned by the user associated with the given access_token.
         
        This method returns a list of questions.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/questions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeQuestionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_me_questions_featured(self, request: operations.GetMeQuestionsFeaturedRequest) -> operations.GetMeQuestionsFeaturedResponse:
        r"""Returns the questions that have active bounties offered by the user associated with the given access_token.
         
        This method returns a list of questions.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/questions/featured"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeQuestionsFeaturedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_me_questions_no_answers(self, request: operations.GetMeQuestionsNoAnswersRequest) -> operations.GetMeQuestionsNoAnswersResponse:
        r"""Returns the questions owned by the user associated with the given access_token that have no answers.
         
        This method returns a list of questions.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/questions/no-answers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeQuestionsNoAnswersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_me_questions_unaccepted(self, request: operations.GetMeQuestionsUnacceptedRequest) -> operations.GetMeQuestionsUnacceptedResponse:
        r"""Returns the questions owned by the user associated with the given access_token that have no accepted answer.
         
        This method returns a list of questions.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/questions/unaccepted"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeQuestionsUnacceptedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_me_questions_unanswered(self, request: operations.GetMeQuestionsUnansweredRequest) -> operations.GetMeQuestionsUnansweredResponse:
        r"""Returns the questions owned by the user associated with the given access_token that are not considered answered.
         
        This method returns a list of questions.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/questions/unanswered"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeQuestionsUnansweredResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_me_reputation(self, request: operations.GetMeReputationRequest) -> operations.GetMeReputationResponse:
        r"""Returns the reputation changed for the user associated with the given access_token.
         
        This method returns a list of reputation changes.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/reputation"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeReputationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_me_reputation_history(self, request: operations.GetMeReputationHistoryRequest) -> operations.GetMeReputationHistoryResponse:
        r"""Returns user's public reputation history.
         
        This method returns a list of reputation_history.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/reputation-history"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeReputationHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_me_reputation_history_full(self, request: operations.GetMeReputationHistoryFullRequest) -> operations.GetMeReputationHistoryFullResponse:
        r"""Returns user's full reputation history, including private events.
         
         This method requires an access_token, with a scope containing \"private_info\".
        
         
        This method returns a list of reputation_history.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/reputation-history/full"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeReputationHistoryFullResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_me_suggested_edits(self, request: operations.GetMeSuggestedEditsRequest) -> operations.GetMeSuggestedEditsResponse:
        r"""Returns the suggested edits the user identified by access_token has submitted.
         
        This method returns a list of suggested-edits.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/suggested-edits"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeSuggestedEditsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_me_tags(self, request: operations.GetMeTagsRequest) -> operations.GetMeTagsResponse:
        r"""Returns the tags the user identified by the access_token passed is active in.
         
        This method returns a list of tags.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/tags"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_me_tags_tags_top_answers(self, request: operations.GetMeTagsTagsTopAnswersRequest) -> operations.GetMeTagsTagsTopAnswersResponse:
        r"""Returns the top 30 answers the user associated with the given access_token has posted in response to questions with the given tags.
         
        This method returns a list of answers.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/tags/{tags}/top-answers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeTagsTagsTopAnswersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_me_tags_tags_top_questions(self, request: operations.GetMeTagsTagsTopQuestionsRequest) -> operations.GetMeTagsTagsTopQuestionsResponse:
        r"""Returns the top 30 questions the user associated with the given access_token has posted in response to questions with the given tags.
         
        This method returns a list of questions.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/tags/{tags}/top-questions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeTagsTagsTopQuestionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_me_timeline(self, request: operations.GetMeTimelineRequest) -> operations.GetMeTimelineResponse:
        r"""Returns a subset of the actions the user identified by the passed access_token has taken on the site.
         
        This method returns a list of user timeline objects.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/timeline"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeTimelineResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_me_top_answer_tags(self, request: operations.GetMeTopAnswerTagsRequest) -> operations.GetMeTopAnswerTagsResponse:
        r"""Returns the user identified by access_token's top 30 tags by answer score.
         
        This method returns a list of top tag objects.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/top-answer-tags"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeTopAnswerTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_me_top_question_tags(self, request: operations.GetMeTopQuestionTagsRequest) -> operations.GetMeTopQuestionTagsResponse:
        r"""Returns the user identified by access_token's top 30 tags by question score.
         
        This method returns a list of top tag objects.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/top-question-tags"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeTopQuestionTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_me_write_permissions(self, request: operations.GetMeWritePermissionsRequest) -> operations.GetMeWritePermissionsResponse:
        r"""Returns the write permissions a user has via the api, given an access token.
         
        The Stack Exchange API gives users the ability to create, edit, and delete certain types. This method returns whether the passed user is capable of performing those actions at all, as well as how many times a day they can.
         
        This method does not consider the user's current quota (ie. if they've already exhausted it for today) nor any additional restrictions on write access, such as editing deleted comments.
         
        This method returns a list of write_permissions.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/write-permissions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeWritePermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_notifications(self, request: operations.GetNotificationsRequest) -> operations.GetNotificationsResponse:
        r"""Returns a user's notifications.
         
        This method requires an access_token, with a scope containing \"read_inbox\".
         
        This method returns a list of notifications.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/notifications"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNotificationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_notifications_unread(self, request: operations.GetNotificationsUnreadRequest) -> operations.GetNotificationsUnreadResponse:
        r"""Returns a user's unread notifications.
         
        This method requires an access_token, with a scope containing \"read_inbox\".
         
        This method returns a list of notifications.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/notifications/unread"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNotificationsUnreadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_posts(self, request: operations.GetPostsRequest) -> operations.GetPostsResponse:
        r"""Fetches all posts (questions and answers) on the site.
         
        In many ways this method is the union of /questions and /answers, returning both sets of data albeit only the common fields.
         
        Most applications should use the question or answer specific methods, but /posts is available for those rare cases where any activity is of intereset. Examples of such queries would be: \"all posts on Jan. 1st 2011\" or \"top 10 posts by score of all time\".
         
        The sorts accepted by this method operate on the follow fields of the post object:
         - activity - last_activity_date
         - creation - creation_date
         - votes - score
          activity is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of posts.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/posts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPostsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_posts_ids_(self, request: operations.GetPostsIdsRequest) -> operations.GetPostsIdsResponse:
        r"""Fetches a set of posts by ids.
         
        This method is meant for grabbing an object when unsure whether an id identifies a question or an answer. This is most common with user entered data.
         
        {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
         
        The sorts accepted by this method operate on the follow fields of the post object:
         - activity - last_activity_date
         - creation - creation_date
         - votes - score
          activity is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of posts.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/posts/{ids}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPostsIdsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_posts_ids_comments(self, request: operations.GetPostsIdsCommentsRequest) -> operations.GetPostsIdsCommentsResponse:
        r"""Gets the comments on the posts identified in ids, regardless of the type of the posts.
         
        This method is meant for cases when you are unsure of the type of the post id provided. Generally, this would be due to obtaining the post id directly from a user.
         
        {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
         
        The sorts accepted by this method operate on the follow fields of the comment object:
         - creation - creation_date
         - votes - score
          creation is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of comments.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/posts/{ids}/comments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPostsIdsCommentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_posts_ids_revisions(self, request: operations.GetPostsIdsRevisionsRequest) -> operations.GetPostsIdsRevisionsResponse:
        r"""Returns edit revisions for the posts identified in ids.
         
        {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
         
        This method returns a list of revisions.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/posts/{ids}/revisions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPostsIdsRevisionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_posts_ids_suggested_edits(self, request: operations.GetPostsIdsSuggestedEditsRequest) -> operations.GetPostsIdsSuggestedEditsResponse:
        r"""Returns suggsted edits on the posts identified in ids.
         
         - creation - creation_date
         - approval - approval_date
         - rejection - rejection_date
          creation is the default sort.
         
         {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
        
         
        This method returns a list of suggested-edits.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/posts/{ids}/suggested-edits", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPostsIdsSuggestedEditsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_privileges(self, request: operations.GetPrivilegesRequest) -> operations.GetPrivilegesResponse:
        r"""Returns the earnable privileges on a site.
         
        Privileges define abilities a user can earn (via reputation) on any Stack Exchange site.
         
        While fairly stable, over time they do change. New ones are introduced with new features, and the reputation requirements change as a site matures.
         
        This method returns a list of privileges.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/privileges"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPrivilegesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_questions(self, request: operations.GetQuestionsRequest) -> operations.GetQuestionsResponse:
        r"""Gets all the questions on the site.
         
        This method allows you make fairly flexible queries across the entire corpus of questions on a site. For example, getting all questions asked in the the week of Jan 1st 2011 with scores of 10 or more is a single query with parameters sort=votes&min=10&fromdate=1293840000&todate=1294444800.
         
        To constrain questions returned to those with a set of tags, use the tagged parameter with a semi-colon delimited list of tags. This is an and contraint, passing tagged=c;java will return only those questions with both tags. As such, passing more than 5 tags will always return zero results.
         
        The sorts accepted by this method operate on the follow fields of the question object:
         - activity - last_activity_date
         - creation - creation_date
         - votes - score
         - hot - by the formula ordering the hot tab Does not accept min or max
         - week - by the formula ordering the week tab Does not accept min or max
         - month - by the formula ordering the month tab Does not accept min or max
          activity is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of questions.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/questions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQuestionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_questions_featured(self, request: operations.GetQuestionsFeaturedRequest) -> operations.GetQuestionsFeaturedResponse:
        r"""Returns all the questions with active bounties in the system.
         
        The sorts accepted by this method operate on the follow fields of the question object:
         - activity - last_activity_date
         - creation - creation_date
         - votes - score
          activity is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of questions.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/questions/featured"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQuestionsFeaturedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_questions_ids_(self, request: operations.GetQuestionsIdsRequest) -> operations.GetQuestionsIdsResponse:
        r"""Returns the questions identified in {ids}.
         
        This is most useful for fetching fresh data when maintaining a cache of question ids, or polling for changes.
         
        {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
         
        The sorts accepted by this method operate on the follow fields of the question object:
         - activity - last_activity_date
         - creation - creation_date
         - votes - score
          activity is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of questions.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/questions/{ids}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQuestionsIdsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_questions_ids_answers(self, request: operations.GetQuestionsIdsAnswersRequest) -> operations.GetQuestionsIdsAnswersResponse:
        r"""Gets the answers to a set of questions identified in id.
         
        This method is most useful if you have a set of interesting questions, and you wish to obtain all of their answers at once or if you are polling for new or updates answers (in conjunction with sort=activity).
         
        {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
         
        The sorts accepted by this method operate on the follow fields of the answer object:
         - activity - last_activity_date
         - creation - creation_date
         - votes - score
          activity is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of answers.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/questions/{ids}/answers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQuestionsIdsAnswersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_questions_ids_comments(self, request: operations.GetQuestionsIdsCommentsRequest) -> operations.GetQuestionsIdsCommentsResponse:
        r"""Gets the comments on a question.
         
        If you know that you have an question id and need the comments, use this method. If you know you have a answer id, use /answers/{ids}/comments. If you are unsure, use /posts/{ids}/comments.
         
        {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
         
        The sorts accepted by this method operate on the follow fields of the comment object:
         - creation - creation_date
         - votes - score
          creation is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of comments.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/questions/{ids}/comments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQuestionsIdsCommentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_questions_ids_linked(self, request: operations.GetQuestionsIdsLinkedRequest) -> operations.GetQuestionsIdsLinkedResponse:
        r"""Gets questions which link to those questions identified in {ids}.
         
        This method only considers questions that are linked within a site, and will never return questions from another Stack Exchange site.
         
        A question is considered \"linked\" when it explicitly includes a hyperlink to another question, there are no other heuristics.
         
        {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
         
        The sorts accepted by this method operate on the follow fields of the question object:
         - activity - last_activity_date
         - creation - creation_date
         - votes - score
         - rank - a priority sort by site applies, subject to change at any time Does not accept min or max
          activity is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of questions.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/questions/{ids}/linked", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQuestionsIdsLinkedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_questions_ids_related(self, request: operations.GetQuestionsIdsRelatedRequest) -> operations.GetQuestionsIdsRelatedResponse:
        r"""Returns questions that the site considers related to those identified in {ids}.
         
        The algorithm for determining if questions are related is not documented, and subject to change at any time. Futhermore, these values are very heavily cached, and may not update immediately after a question has been editted. It is also not guaranteed that a question will be considered related to any number (even non-zero) of questions, and a consumer should be able to handle a variable number of returned questions.
         
        {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
         
        The sorts accepted by this method operate on the follow fields of the question object:
         - activity - last_activity_date
         - creation - creation_date
         - votes - score
         - rank - a priority sort by site applies, subject to change at any time Does not accept min or max
          activity is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of questions.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/questions/{ids}/related", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQuestionsIdsRelatedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_questions_ids_timeline(self, request: operations.GetQuestionsIdsTimelineRequest) -> operations.GetQuestionsIdsTimelineResponse:
        r"""Returns a subset of the events that have happened to the questions identified in id.
         
        This provides data similar to that found on a question's timeline page.
         
        Voting data is scrubbed to deter inferencing of voter identity.
         
        {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
         
        This method returns a list of question timeline events.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/questions/{ids}/timeline", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQuestionsIdsTimelineResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_questions_no_answers(self, request: operations.GetQuestionsNoAnswersRequest) -> operations.GetQuestionsNoAnswersResponse:
        r"""Returns questions which have received no answers.
         
        Compare with /questions/unanswered which mearly returns questions that the sites consider insufficiently well answered.
         
        This method corresponds roughly with the this site tab.
         
        To constrain questions returned to those with a set of tags, use the tagged parameter with a semi-colon delimited list of tags. This is an and contraint, passing tagged=c;java will return only those questions with both tags. As such, passing more than 5 tags will always return zero results.
         
        The sorts accepted by this method operate on the follow fields of the question object:
         - activity - last_activity_date
         - creation - creation_date
         - votes - score
          activity is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of questions.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/questions/no-answers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQuestionsNoAnswersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_questions_unanswered(self, request: operations.GetQuestionsUnansweredRequest) -> operations.GetQuestionsUnansweredResponse:
        r"""Returns questions the site considers to be unanswered.
         
        Note that just because a question has an answer, that does not mean it is considered answered. While the rules are subject to change, at this time a question must have at least one upvoted answer to be considered answered.
         
        To constrain questions returned to those with a set of tags, use the tagged parameter with a semi-colon delimited list of tags. This is an and contraint, passing tagged=c;java will return only those questions with both tags. As such, passing more than 5 tags will always return zero results.
         
        Compare with /questions/no-answers.
         
        This method corresponds roughly with the unanswered tab.
         
        The sorts accepted by this method operate on the follow fields of the question object:
         - activity - last_activity_date
         - creation - creation_date
         - votes - score
          activity is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of questions.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/questions/unanswered"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQuestionsUnansweredResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_revisions_ids_(self, request: operations.GetRevisionsIdsRequest) -> operations.GetRevisionsIdsResponse:
        r"""Returns edit revisions identified by ids in {ids}.
         
        {ids} can contain up to 20 semicolon delimited ids, to find ids programatically look for revision_guid on revision objects. Note that unlike most other id types in the API, revision_guid is a string.
         
        This method returns a list of revisions.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/revisions/{ids}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRevisionsIdsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_search(self, request: operations.GetSearchRequest) -> operations.GetSearchResponse:
        r"""Searches a site for any questions which fit the given criteria.
         
        This method is intentionally quite limited. For more general searching, you should use a proper internet search engine restricted to the domain of the site in question.
         
        At least one of tagged or intitle must be set on this method. nottagged is only used if tagged is also set, for performance reasons.
         
        tagged and nottagged are semi-colon delimited list of tags. At least 1 tag in tagged will be on each returned question if it is passed, making it the OR equivalent of the AND version of tagged on /questions.
         
        The sorts accepted by this method operate on the follow fields of the question object:
         - activity - last_activity_date
         - creation - creation_date
         - votes - score
         - relevance - matches the relevance tab on the site itself Does not accept min or max
          activity is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of questions.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_search_advanced(self, request: operations.GetSearchAdvancedRequest) -> operations.GetSearchAdvancedResponse:
        r"""Searches a site for any questions which fit the given criteria.
         
        Search criteria are expressed using the following parameters:
          - q - a free form text parameter, will match all question properties based on an undocumented algorithm.
         - accepted - true to return only questions with accepted answers, false to return only those without. Omit to elide constraint.
         - answers - the minimum number of answers returned questions must have.
         - body - text which must appear in returned questions' bodies.
         - closed - true to return only closed questions, false to return only open ones. Omit to elide constraint.
         - migrated - true to return only questions migrated away from a site, false to return only those not. Omit to elide constraint.
         - notice - true to return only questions with post notices, false to return only those without. Omit to elide constraint.
         - nottagged - a semicolon delimited list of tags, none of which will be present on returned questions.
         - tagged - a semicolon delimited list of tags, of which at least one will be present on all returned questions.
         - title - text which must appear in returned questions' titles.
         - user - the id of the user who must own the questions returned.
         - url - a url which must be contained in a post, may include a wildcard.
         - views - the minimum number of views returned questions must have.
         - wiki - true to return only community wiki questions, false to return only non-community wiki ones. Omit to elide constraint.
        
          
        At least one additional parameter must be set if nottagged is set, for performance reasons.
         
        The sorts accepted by this method operate on the follow fields of the question object:
         - activity - last_activity_date
         - creation - creation_date
         - votes - score
         - relevance - matches the relevance tab on the site itself Does not accept min or max
          activity is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of questions.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/advanced"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchAdvancedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_similar(self, request: operations.GetSimilarRequest) -> operations.GetSimilarResponse:
        r"""Returns questions which are similar to a hypothetical one based on a title and tag combination.
         
        This method is roughly equivalent to a site's related questions suggestion on the ask page.
         
        This method is useful for correlating data outside of a Stack Exchange site with similar content within one.
         
        Note that title must always be passed as a parameter. tagged and nottagged are optional, semi-colon delimited lists of tags.
         
        If tagged is passed it is treated as a preference, there is no guarantee that questions returned will have any of those tags. nottagged is treated as a requirement, no questions will be returned with those tags.
         
        The sorts accepted by this method operate on the follow fields of the question object:
         - activity - last_activity_date
         - creation - creation_date
         - votes - score
         - relevance - order by \"how similar\" the questions are, most likely candidate first with a descending order Does not accept min or max
          activity is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of questions.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/similar"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSimilarResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_sites(self, request: operations.GetSitesRequest) -> operations.GetSitesResponse:
        r"""Returns all sites in the network.
         
        This method allows for discovery of new sites, and changes to existing ones. Be aware that unlike normal API methods, this method should be fetched very infrequently, it is very unusual for these values to change more than once on any given day. It is suggested that you cache its return for at least one day, unless your app encounters evidence that it has changed (such as from the /info method).
         
        The pagesize parameter for this method is unbounded, in acknowledgement that for many applications repeatedly fetching from /sites would complicate start-up tasks needlessly.
         
        This method returns a list of sites.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sites"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSitesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_suggested_edits(self, request: operations.GetSuggestedEditsRequest) -> operations.GetSuggestedEditsResponse:
        r"""Returns all the suggested edits in the systems.
         
        This method returns a list of suggested-edits.
         
        The sorts accepted by this method operate on the follow fields of the suggested_edit object:
         - creation - creation_date
         - approval - approval_date Does not return unapproved suggested_edits
         - rejection - rejection_date Does not return unrejected suggested_edits
          creation is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/suggested-edits"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSuggestedEditsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_suggested_edits_ids_(self, request: operations.GetSuggestedEditsIdsRequest) -> operations.GetSuggestedEditsIdsResponse:
        r"""Returns suggested edits identified in ids.
         
        {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for suggested_edit_id on suggested_edit objects.
         
        The sorts accepted by this method operate on the follow fields of the suggested_edit object:
         - creation - creation_date
         - approval - approval_date Does not return unapproved suggested_edits
         - rejection - rejection_date Does not return unrejected suggested_edits
          creation is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of suggested-edits.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/suggested-edits/{ids}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSuggestedEditsIdsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_tags(self, request: operations.GetTagsRequest) -> operations.GetTagsResponse:
        r"""Returns the tags found on a site.
         
        The inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both \"download\" and \"owner\" amongst others.
         
        This method returns a list of tags.
         
        The sorts accepted by this method operate on the follow fields of the tag object:
         - popular - count
         - activity - the creation_date of the last question asked with the tag
         - name - name
          popular is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tags"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_tags_moderator_only(self, request: operations.GetTagsModeratorOnlyRequest) -> operations.GetTagsModeratorOnlyResponse:
        r"""Returns the tags found on a site that only moderators can use.
         
        The inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both \"download\" and \"owner\" amongst others.
         
        This method returns a list of tags.
         
        The sorts accepted by this method operate on the follow fields of the tag object:
         - popular - count
         - activity - the creation_date of the last question asked with the tag
         - name - name
          popular is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tags/moderator-only"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTagsModeratorOnlyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_tags_required(self, request: operations.GetTagsRequiredRequest) -> operations.GetTagsRequiredResponse:
        r"""Returns the tags found on a site that fulfill required tag constraints on questions.
         
        The inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both \"download\" and \"owner\" amongst others.
         
        This method returns a list of tags.
         
        The sorts accepted by this method operate on the follow fields of the tag object:
         - popular - count
         - activity - the creation_date of the last question asked with the tag
         - name - name
          popular is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tags/required"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTagsRequiredResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_tags_synonyms(self, request: operations.GetTagsSynonymsRequest) -> operations.GetTagsSynonymsResponse:
        r"""Returns all tag synonyms found a site.
         
        When searching for synonyms of specific tags, it is better to use /tags/{tags}/synonyms over this method.
         
        The sorts accepted by this method operate on the follow fields of the tag_synonym object:
         - creation - creation_date
         - applied - applied_count
         - activity - last_applied_date
          creation is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of tag_synonyms.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tags/synonyms"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTagsSynonymsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_tags_tag_top_answerers_period_(self, request: operations.GetTagsTagTopAnswerersPeriodRequest) -> operations.GetTagsTagTopAnswerersPeriodResponse:
        r"""Returns the top 30 answerers active in a single tag, of either all-time or the last 30 days.
         
        This is a view onto the data presented on the tag info page on the sites.
         
        This method returns a list of tag score objects.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tags/{tag}/top-answerers/{period}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTagsTagTopAnswerersPeriodResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_tags_tag_top_askers_period_(self, request: operations.GetTagsTagTopAskersPeriodRequest) -> operations.GetTagsTagTopAskersPeriodResponse:
        r"""Returns the top 30 askers active in a single tag, of either all-time or the last 30 days.
         
        This is a view onto the data presented on the tag info page on the sites.
         
        This method returns a list of tag score objects.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tags/{tag}/top-askers/{period}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTagsTagTopAskersPeriodResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_tags_tags_faq(self, request: operations.GetTagsTagsFaqRequest) -> operations.GetTagsTagsFaqResponse:
        r"""Returns the frequently asked questions for the given set of tags in {tags}.
         
        For a question to be returned, it must have all the tags in {tags} and be considered \"frequently asked\". The exact algorithm for determining whether a question is considered a FAQ is subject to change at any time.
         
        {tags} can contain up to 5 individual tags per request.
         
        This method returns a list of questions.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tags/{tags}/faq", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTagsTagsFaqResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_tags_tags_info(self, request: operations.GetTagsTagsInfoRequest) -> operations.GetTagsTagsInfoResponse:
        r"""Returns tag objects representing the tags in {tags} found on the site.
         
        This method diverges from the standard naming patterns to avoid to conflicting with existing methods, due to the free form nature of tag names.
         
        This method returns a list of tags.
         
        The sorts accepted by this method operate on the follow fields of the tag object:
         - popular - count
         - activity - the creation_date of the last question asked with the tag
         - name - name
          popular is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tags/{tags}/info", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTagsTagsInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_tags_tags_related(self, request: operations.GetTagsTagsRelatedRequest) -> operations.GetTagsTagsRelatedResponse:
        r"""Returns the tags that are most related to those in {tags}.
         
        Including multiple tags in {tags} is equivalent to asking for \"tags related to tag #1 and tag #2\" not \"tags related to tag #1 or tag #2\".
         
        count on tag objects returned is the number of question with that tag that also share all those in {tags}.
         
        {tags} can contain up to 4 individual tags per request.
         
        This method returns a list of tags.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tags/{tags}/related", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTagsTagsRelatedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_tags_tags_synonyms(self, request: operations.GetTagsTagsSynonymsRequest) -> operations.GetTagsTagsSynonymsResponse:
        r"""Gets all the synonyms that point to the tags identified in {tags}. If you're looking to discover all the tag synonyms on a site, use the /tags/synonyms methods instead of call this method on all tags.
         
        {tags} can contain up to 20 individual tags per request.
         
        The sorts accepted by this method operate on the follow fields of the tag_synonym object:
         - creation - creation_date
         - applied - applied_count
         - activity - last_applied_date
          creation is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of tag synonyms.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tags/{tags}/synonyms", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTagsTagsSynonymsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_tags_tags_wikis(self, request: operations.GetTagsTagsWikisRequest) -> operations.GetTagsTagsWikisResponse:
        r"""Returns the wikis that go with the given set of tags in {tags}.
         
        Be aware that not all tags have wikis.
         
        {tags} can contain up to 20 individual tags per request.
         
        This method returns a list of tag wikis.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tags/{tags}/wikis", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTagsTagsWikisResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_users(self, request: operations.GetUsersRequest) -> operations.GetUsersResponse:
        r"""Returns all users on a site.
         
        This method returns a list of users.
         
        The sorts accepted by this method operate on the follow fields of the user object:
         - reputation - reputation
         - creation - creation_date
         - name - display_name
         - modified - last_modified_date
          reputation is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        The inname parameter lets consumers filter the results down to just those users with a certain substring in their display name. For example, inname=kevin will return all users with both users named simply \"Kevin\" or those with Kevin as one of (or part of) their names; such as \"Kevin Montrose\".
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_users_id_inbox(self, request: operations.GetUsersIDInboxRequest) -> operations.GetUsersIDInboxResponse:
        r"""Returns a user's inbox.
         
        This method requires an access_token, with a scope containing \"read_inbox\".
         
        This method is effectively an alias for /inbox. It is provided for consumers who make strong assumptions about operating within the context of a single site rather than the Stack Exchange network as a whole.
         
        {id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
         
        This method returns a list of inbox items.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{id}/inbox", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersIDInboxResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_users_id_inbox_unread(self, request: operations.GetUsersIDInboxUnreadRequest) -> operations.GetUsersIDInboxUnreadResponse:
        r"""Returns the unread items in a user's inbox.
         
        This method requires an access_token, with a scope containing \"read_inbox\".
         
        This method is effectively an alias for /inbox/unread. It is provided for consumers who make strong assumptions about operating within the context of a single site rather than the Stack Exchange network as a whole.
         
        {id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
         
        This method returns a list of inbox items.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{id}/inbox/unread", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersIDInboxUnreadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_users_id_notifications(self, request: operations.GetUsersIDNotificationsRequest) -> operations.GetUsersIDNotificationsResponse:
        r"""Returns a user's notifications.
         
        This method requires an access_token, with a scope containing \"read_inbox\".
         
        This method returns a list of notifications.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{id}/notifications", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersIDNotificationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_users_id_notifications_unread(self, request: operations.GetUsersIDNotificationsUnreadRequest) -> operations.GetUsersIDNotificationsUnreadResponse:
        r"""Returns a user's unread notifications.
         
        This method requires an access_token, with a scope containing \"read_inbox\".
         
        This method returns a list of notifications.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{id}/notifications/unread", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersIDNotificationsUnreadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_users_id_privileges(self, request: operations.GetUsersIDPrivilegesRequest) -> operations.GetUsersIDPrivilegesResponse:
        r"""Returns the privileges a user has.
         
        Applications are encouraged to calculate privileges themselves, without repeated queries to this method. A simple check against the results returned by /privileges and user.user_type would be sufficient.
         
        {id} can contain only a single, to find it programatically look for user_id on user or shallow_user objects.
         
        This method returns a list of privileges.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{id}/privileges", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersIDPrivilegesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_users_id_reputation_history_full(self, request: operations.GetUsersIDReputationHistoryFullRequest) -> operations.GetUsersIDReputationHistoryFullResponse:
        r"""Returns a user's full reputation history, including private events.
         
        This method requires an access_token, with a scope containing \"private_info\".
         
        This method returns a list of reputation_history.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{id}/reputation-history/full", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersIDReputationHistoryFullResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_users_id_tags_tags_top_answers(self, request: operations.GetUsersIDTagsTagsTopAnswersRequest) -> operations.GetUsersIDTagsTagsTopAnswersResponse:
        r"""Returns the top 30 answers a user has posted in response to questions with the given tags.
         
        {id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects. {tags} is limited to 5 tags, passing more will result in an error.
         
        The sorts accepted by this method operate on the follow fields of the answer object:
         - activity - last_activity_date
         - creation - creation_date
         - votes - score
          activity is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of answers.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{id}/tags/{tags}/top-answers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersIDTagsTagsTopAnswersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_users_id_tags_tags_top_questions(self, request: operations.GetUsersIDTagsTagsTopQuestionsRequest) -> operations.GetUsersIDTagsTagsTopQuestionsResponse:
        r"""Returns the top 30 questions a user has asked with the given tags.
         
        {id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects. {tags} is limited to 5 tags, passing more will result in an error.
         
        The sorts accepted by this method operate on the follow fields of the question object:
         - activity - last_activity_date
         - creation - creation_date
         - votes - score
          activity is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of questions.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{id}/tags/{tags}/top-questions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersIDTagsTagsTopQuestionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_users_id_top_answer_tags(self, request: operations.GetUsersIDTopAnswerTagsRequest) -> operations.GetUsersIDTopAnswerTagsResponse:
        r"""Returns a single user's top tags by answer score.
         
        This a subset of the data returned on a user's tags tab.
         
        {id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
         
        This method returns a list of top_tag objects.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{id}/top-answer-tags", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersIDTopAnswerTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_users_id_top_question_tags(self, request: operations.GetUsersIDTopQuestionTagsRequest) -> operations.GetUsersIDTopQuestionTagsResponse:
        r"""Returns a single user's top tags by question score.
         
        This a subset of the data returned on a user's tags tab.
         
        {id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
         
        This method returns a list of top_tag objects.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{id}/top-question-tags", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersIDTopQuestionTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_users_id_write_permissions(self, request: operations.GetUsersIDWritePermissionsRequest) -> operations.GetUsersIDWritePermissionsResponse:
        r"""Returns the write permissions a user has via the api.
         
        The Stack Exchange API gives users the ability to create, edit, and delete certain types. This method returns whether the passed user is capable of performing those actions at all, as well as how many times a day they can.
         
        This method does not consider the user's current quota (ie. if they've already exhausted it for today) nor any additional restrictions on write access, such as editing deleted comments.
         
        This method returns a list of write_permissions.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{id}/write-permissions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersIDWritePermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_users_ids_(self, request: operations.GetUsersIdsRequest) -> operations.GetUsersIdsResponse:
        r"""Gets the users identified in ids in {ids}.
         
        Typically this method will be called to fetch user profiles when you have obtained user ids from some other source, such as /questions.
         
        {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
         
        The sorts accepted by this method operate on the follow fields of the user object:
         - reputation - reputation
         - creation - creation_date
         - name - display_name
         - modified - last_modified_date
          reputation is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of users.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{ids}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersIdsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_users_ids_answers(self, request: operations.GetUsersIdsAnswersRequest) -> operations.GetUsersIdsAnswersResponse:
        r"""Returns the answers the users in {ids} have posted.
         
        {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
         
        The sorts accepted by this method operate on the follow fields of the answer object:
         - activity - last_activity_date
         - creation - creation_date
         - votes - score
          activity is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of answers.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{ids}/answers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersIdsAnswersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_users_ids_associated(self, request: operations.GetUsersIdsAssociatedRequest) -> operations.GetUsersIdsAssociatedResponse:
        r"""Returns all of a user's associated accounts, given their account_ids in {ids}.
         
        {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for account_id on user objects.
         
        This method returns a list of network_users.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{ids}/associated", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersIdsAssociatedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_users_ids_badges(self, request: operations.GetUsersIdsBadgesRequest) -> operations.GetUsersIdsBadgesResponse:
        r"""Get the badges the users in {ids} have earned.
         
        Badge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.
         
        This means that you can get a list of all tag based badges a user has by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.
         
        For ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
         
        rank is the default sort.
         
        {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
         
        This method returns a list of badges.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{ids}/badges", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersIdsBadgesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_users_ids_comments(self, request: operations.GetUsersIdsCommentsRequest) -> operations.GetUsersIdsCommentsResponse:
        r"""Get the comments posted by users in {ids}.
         
        {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
         
        The sorts accepted by this method operate on the follow fields of the comment object:
         - creation - creation_date
         - votes - score
          creation is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of comments.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{ids}/comments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersIdsCommentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_users_ids_comments_toid_(self, request: operations.GetUsersIdsCommentsToidRequest) -> operations.GetUsersIdsCommentsToidResponse:
        r"""Get the comments that the users in {ids} have posted in reply to the single user identified in {toid}.
         
        This method is useful for extracting conversations, especially over time or across multiple posts.
         
        {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects. {toid} can contain only 1 id, found in the same manner as those in {ids}.
         
        The sorts accepted by this method operate on the follow fields of the comment object:
         - creation - creation_date
         - votes - score
          creation is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of comments.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{ids}/comments/{toid}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersIdsCommentsToidResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_users_ids_favorites(self, request: operations.GetUsersIdsFavoritesRequest) -> operations.GetUsersIdsFavoritesResponse:
        r"""Get the questions that users in {ids} have favorited.
         
        This method is effectively a view onto a user's favorites tab.
         
        {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
         
        The sorts accepted by this method operate on the follow fields of the question object:
         - activity - last_activity_date
         - creation - creation_date
         - votes - score
         - added - when the user favorited the question
          activity is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of questions.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{ids}/favorites", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersIdsFavoritesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_users_ids_mentioned(self, request: operations.GetUsersIdsMentionedRequest) -> operations.GetUsersIdsMentionedResponse:
        r"""Gets all the comments that the users in {ids} were mentioned in.
         
        Note, to count as a mention the comment must be considered to be \"in reply to\" a user. Most importantly, this means that a comment can only be in reply to a single user.
         
        {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
         
        The sorts accepted by this method operate on the follow fields of the comment object:
         - creation - creation_date
         - votes - score
          It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of comments.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{ids}/mentioned", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersIdsMentionedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_users_ids_merges(self, request: operations.GetUsersIdsMergesRequest) -> operations.GetUsersIdsMergesResponse:
        r"""Returns a record of merges that have occurred involving the passed account ids.
         
        This method allows you to take now invalid account ids and find what account they've become, or take currently valid account ids and find which ids were equivalent in the past.
         
        This is most useful when confirming that an account_id is in fact \"new\" to an application.
         
        Account merges can happen for a wide range of reasons, applications should not make assumptions that merges have particular causes.
         
        Note that accounts are managed at a network level, users on a site may be merged due to an account level merge but there is no guarantee that a merge has an effect on any particular site.
         
        This method returns a list of account_merge.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{ids}/merges", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersIdsMergesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_users_ids_questions(self, request: operations.GetUsersIdsQuestionsRequest) -> operations.GetUsersIdsQuestionsResponse:
        r"""Gets the questions asked by the users in {ids}.
         
        {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
         
        The sorts accepted by this method operate on the follow fields of the question object:
         - activity - last_activity_date
         - creation - creation_date
         - votes - score
          activity is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of questions.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{ids}/questions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersIdsQuestionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_users_ids_questions_featured(self, request: operations.GetUsersIdsQuestionsFeaturedRequest) -> operations.GetUsersIdsQuestionsFeaturedResponse:
        r"""Gets the questions on which the users in {ids} have active bounties.
         
        {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
         
        The sorts accepted by this method operate on the follow fields of the question object:
         - activity - last_activity_date
         - creation - creation_date
         - votes - score
          activity is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of questions.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{ids}/questions/featured", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersIdsQuestionsFeaturedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_users_ids_questions_no_answers(self, request: operations.GetUsersIdsQuestionsNoAnswersRequest) -> operations.GetUsersIdsQuestionsNoAnswersResponse:
        r"""Gets the questions asked by the users in {ids} which have no answers.
         
        Questions returns by this method actually have zero undeleted answers. It is completely disjoint /users/{ids}/questions/unanswered and /users/{ids}/questions/unaccepted, which only return questions with at least one answer, subject to other contraints.
         
        {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
         
        The sorts accepted by this method operate on the follow fields of the question object:
         - activity - last_activity_date
         - creation - creation_date
         - votes - score
          activity is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of questions.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{ids}/questions/no-answers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersIdsQuestionsNoAnswersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_users_ids_questions_unaccepted(self, request: operations.GetUsersIdsQuestionsUnacceptedRequest) -> operations.GetUsersIdsQuestionsUnacceptedResponse:
        r"""Gets the questions asked by the users in {ids} which have at least one answer, but no accepted answer.
         
        Questions returned by this method have answers, but the owner has not opted to accept any of them.
         
        {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
         
        The sorts accepted by this method operate on the follow fields of the question object:
         - activity - last_activity_date
         - creation - creation_date
         - votes - score
          activity is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of questions.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{ids}/questions/unaccepted", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersIdsQuestionsUnacceptedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_users_ids_questions_unanswered(self, request: operations.GetUsersIdsQuestionsUnansweredRequest) -> operations.GetUsersIdsQuestionsUnansweredResponse:
        r"""Gets the questions asked by the users in {ids} which the site consideres unanswered, while still having at least one answer posted.
         
        These rules are subject to change, but currently any question without at least one upvoted or accepted answer is considered unanswered.
         
        To get the set of questions that a user probably considers unanswered, the returned questions should be unioned with those returned by /users/{id}/questions/no-answers. These methods are distinct so that truly unanswered (that is, zero posted answers) questions can be easily separated from mearly poorly or inadequately answered ones.
         
        {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
         
        The sorts accepted by this method operate on the follow fields of the question object:
         - activity - last_activity_date
         - creation - creation_date
         - votes - score
          activity is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of questions.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{ids}/questions/unanswered", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersIdsQuestionsUnansweredResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_users_ids_reputation(self, request: operations.GetUsersIdsReputationRequest) -> operations.GetUsersIdsReputationResponse:
        r"""Gets a subset of the reputation changes for users in {ids}.
         
        Reputation changes are intentionally scrubbed of some data to make it difficult to correlate votes on particular posts with user reputation changes. That being said, this method returns enough data for reasonable display of reputation trends.
         
        {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
         
        This method returns a list of reputation objects.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{ids}/reputation", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersIdsReputationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_users_ids_reputation_history(self, request: operations.GetUsersIdsReputationHistoryRequest) -> operations.GetUsersIdsReputationHistoryResponse:
        r"""Returns users' public reputation history.
         
        This method returns a list of reputation_history.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{ids}/reputation-history", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersIdsReputationHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_users_ids_suggested_edits(self, request: operations.GetUsersIdsSuggestedEditsRequest) -> operations.GetUsersIdsSuggestedEditsResponse:
        r"""Returns the suggested edits a users in {ids} have submitted.
         
        {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
         
        The sorts accepted by this method operate on the follow fields of the suggested_edit object:
         - creation - creation_date
         - approval - approval_date Does not return unapproved suggested_edits
         - rejection - rejection_date Does not return unrejected suggested_edits
          creation is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of suggested-edits.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{ids}/suggested-edits", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersIdsSuggestedEditsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_users_ids_tags(self, request: operations.GetUsersIdsTagsRequest) -> operations.GetUsersIdsTagsResponse:
        r"""Returns the tags the users identified in {ids} have been active in.
         
        This route corresponds roughly to user's stats tab, but does not include tag scores. A subset of tag scores are available (on a single user basis) in /users/{id}/top-answer-tags and /users/{id}/top-question-tags.
         
        {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
         
        The sorts accepted by this method operate on the follow fields of the tag object:
         - popular - count
         - activity - the creation_date of the last question asked with the tag
         - name - name
          popular is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of tags.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{ids}/tags", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersIdsTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_users_ids_timeline(self, request: operations.GetUsersIdsTimelineRequest) -> operations.GetUsersIdsTimelineResponse:
        r"""Returns a subset of the actions the users in {ids} have taken on the site.
         
        This method returns users' posts, edits, and earned badges in the order they were accomplished. It is possible to filter to just a window of activity using the fromdate and todate parameters.
         
        {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
         
        This method returns a list of user timeline objects.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{ids}/timeline", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersIdsTimelineResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_users_moderators(self, request: operations.GetUsersModeratorsRequest) -> operations.GetUsersModeratorsResponse:
        r"""Gets those users on a site who can exercise moderation powers.
         
        Note, employees of Stack Exchange Inc. will be returned if they have been granted moderation powers on a site even if they have never been appointed or elected explicitly. This method checks abilities, not the manner in which they were obtained.
         
        The sorts accepted by this method operate on the follow fields of the user object:
         - reputation - reputation
         - creation - creation_date
         - name - display_name
         - modified - last_modified_date
          reputation is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of users.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/moderators"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersModeratorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_users_moderators_elected(self, request: operations.GetUsersModeratorsElectedRequest) -> operations.GetUsersModeratorsElectedResponse:
        r"""Returns those users on a site who both have moderator powers, and were actually elected.
         
        This method excludes Stack Exchange Inc. employees, unless they were actually elected moderators on a site (which can only have happened prior to their employment).
         
        The sorts accepted by this method operate on the follow fields of the user object:
         - reputation - reputation
         - creation - creation_date
         - name - display_name
         - modified - last_modified_date
          reputation is the default sort.
         
         It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
        
         
        This method returns a list of users.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/moderators/elected"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersModeratorsElectedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def post_comments_id_delete(self, request: operations.PostCommentsIDDeleteRequest) -> operations.PostCommentsIDDeleteResponse:
        r"""Deletes a comment.
         
        Use an access_token with write_access to delete a comment.
         
        In practice, this method will never return an object.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/comments/{id}/delete", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCommentsIDDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def post_comments_id_edit(self, request: operations.PostCommentsIDEditRequest) -> operations.PostCommentsIDEditResponse:
        r"""Edit an existing comment.
         
        Use an access_token with write_access to edit an existing comment.
         
        This method return the created comment.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/comments/{id}/edit", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCommentsIDEditResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def post_posts_id_comments_add(self, request: operations.PostPostsIDCommentsAddRequest) -> operations.PostPostsIDCommentsAddResponse:
        r"""Create a new comment.
         
        Use an access_token with write_access to create a new comment on a post.
         
        This method returns the created comment.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/posts/{id}/comments/add", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPostsIDCommentsAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 502:
            pass
        elif r.status_code == 503:
            pass

        return res

    