import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class CategoriesSubscriptions:
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

    
    def check_if_user_subscribed_to_category(self, request: operations.CheckIfUserSubscribedToCategoryRequest) -> operations.CheckIfUserSubscribedToCategoryResponse:
        r"""Check if a user follows a category
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/categories/{category}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CheckIfUserSubscribedToCategoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def check_if_user_subscribed_to_category_alt1(self, request: operations.CheckIfUserSubscribedToCategoryAlt1Request) -> operations.CheckIfUserSubscribedToCategoryAlt1Response:
        r"""Check if a user follows a category
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/categories/{category}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CheckIfUserSubscribedToCategoryAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_category_subscriptions(self, request: operations.GetCategorySubscriptionsRequest) -> operations.GetCategorySubscriptionsResponse:
        r"""Get all the categories that a user follows
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/categories", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCategorySubscriptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.category+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Category]])
                res.categories = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.category+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_category_subscriptions_alt1(self, request: operations.GetCategorySubscriptionsAlt1Request) -> operations.GetCategorySubscriptionsAlt1Response:
        r"""Get all the categories that a user follows
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/categories"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCategorySubscriptionsAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.category+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Category]])
                res.categories = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.category+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def subscribe_to_category(self, request: operations.SubscribeToCategoryRequest) -> operations.SubscribeToCategoryResponse:
        r"""Subscribe a user to a single category
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/categories/{category}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SubscribeToCategoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def subscribe_to_category_alt1(self, request: operations.SubscribeToCategoryAlt1Request) -> operations.SubscribeToCategoryAlt1Response:
        r"""Subscribe a user to a single category
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/categories/{category}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SubscribeToCategoryAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def unsubscribe_from_category(self, request: operations.UnsubscribeFromCategoryRequest) -> operations.UnsubscribeFromCategoryResponse:
        r"""Unsubscribe a user from a category
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/categories/{category}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnsubscribeFromCategoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def unsubscribe_from_category_alt1(self, request: operations.UnsubscribeFromCategoryAlt1Request) -> operations.UnsubscribeFromCategoryAlt1Response:
        r"""Unsubscribe a user from a category
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/categories/{category}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnsubscribeFromCategoryAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    