import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Conversations:
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

    
    def conversations_close(self, request: operations.ConversationsCloseRequest) -> operations.ConversationsCloseResponse:
        r"""Closes a conversation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/conversations/{conversationId}/close", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ConversationsCloseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationResponse])
                res.conversation_response = out

        return res

    
    def conversations_fetch(self, request: operations.ConversationsFetchRequest) -> operations.ConversationsFetchResponse:
        r"""Fetch conversation by ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/conversations/{conversationId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ConversationsFetchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationResponse])
                res.conversation_response = out

        return res

    
    def conversations_fetch_all(self, request: operations.ConversationsFetchAllRequest) -> operations.ConversationsFetchAllResponse:
        r"""Fetch conversations
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/conversations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ConversationsFetchAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversationsResponse])
                res.conversations_response = out
        elif r.status_code >= 400 and r.status_code < 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code >= 500 and r.status_code < 600:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    