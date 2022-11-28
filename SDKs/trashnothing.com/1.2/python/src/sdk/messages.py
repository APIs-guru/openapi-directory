import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Messages:
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

    
    def archive_conversation(self, request: operations.ArchiveConversationRequest) -> operations.ArchiveConversationResponse:
        r"""Archive conversation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{conversation_id}/archive", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ArchiveConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def block_conversation(self, request: operations.BlockConversationRequest) -> operations.BlockConversationResponse:
        r"""Block conversation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{conversation_id}/block", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.BlockConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_conversation(self, request: operations.DeleteConversationRequest) -> operations.DeleteConversationResponse:
        r"""Delete conversation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{conversation_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_conversation_messages(self, request: operations.GetConversationMessagesRequest) -> operations.GetConversationMessagesResponse:
        r"""List conversation messages
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{conversation_id}/messages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConversationMessagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetConversationMessages200ApplicationJSON])
                res.get_conversation_messages_200_application_json_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_conversations(self, request: operations.GetConversationsRequest) -> operations.GetConversationsResponse:
        r"""List conversations
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/conversations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConversationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetConversations200ApplicationJSON])
                res.get_conversations_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def mark_all_conversations_read(self, request: operations.MarkAllConversationsReadRequest) -> operations.MarkAllConversationsReadResponse:
        r"""Mark all conversations as read
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/conversations/mark-all-read"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MarkAllConversationsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def mark_conversation_read(self, request: operations.MarkConversationReadRequest) -> operations.MarkConversationReadResponse:
        r"""Mark conversation as read
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{conversation_id}/mark-read", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MarkConversationReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def reply_to_conversation(self, request: operations.ReplyToConversationRequest) -> operations.ReplyToConversationResponse:
        r"""Reply to conversation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{conversation_id}/reply", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReplyToConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Message])
                res.message = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def report_conversation(self, request: operations.ReportConversationRequest) -> operations.ReportConversationResponse:
        r"""Report conversation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{conversation_id}/report", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReportConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def search_conversations(self, request: operations.SearchConversationsRequest) -> operations.SearchConversationsResponse:
        r"""Search conversations
        Searches all conversations except blocked conversations.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/conversations/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchConversationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SearchConversations200ApplicationJSON])
                res.search_conversations_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def unarchive_conversation(self, request: operations.UnarchiveConversationRequest) -> operations.UnarchiveConversationResponse:
        r"""Unarchive conversation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{conversation_id}/unarchive", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnarchiveConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def unblock_conversation(self, request: operations.UnblockConversationRequest) -> operations.UnblockConversationResponse:
        r"""Unblock conversation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{conversation_id}/unblock", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnblockConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    