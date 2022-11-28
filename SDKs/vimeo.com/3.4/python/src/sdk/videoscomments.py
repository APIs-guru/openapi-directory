import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class VideosComments:
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

    
    def create_comment(self, request: operations.CreateCommentRequest) -> operations.CreateCommentResponse:
        r"""Add a comment to a video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{video_id}/comments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/vnd.vimeo.comment+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Comment])
                res.comment = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.vimeo.comment+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/vnd.vimeo.comment+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.comment+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def create_comment_alt1(self, request: operations.CreateCommentAlt1Request) -> operations.CreateCommentAlt1Response:
        r"""Add a comment to a video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/channels/{channel_id}/videos/{video_id}/comments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCommentAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/vnd.vimeo.comment+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Comment])
                res.comment = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.vimeo.comment+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/vnd.vimeo.comment+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.comment+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def create_comment_reply(self, request: operations.CreateCommentReplyRequest) -> operations.CreateCommentReplyResponse:
        r"""Add a reply to a video comment
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{video_id}/comments/{comment_id}/replies", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCommentReplyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/vnd.vimeo.comment+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Comment])
                res.comment = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.vimeo.comment+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.comment+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def delete_comment(self, request: operations.DeleteCommentRequest) -> operations.DeleteCommentResponse:
        r"""Delete a video comment
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{video_id}/comments/{comment_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def edit_comment(self, request: operations.EditCommentRequest) -> operations.EditCommentResponse:
        r"""Edit a video comment
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{video_id}/comments/{comment_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EditCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.comment+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Comment])
                res.comment = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.vimeo.comment+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.comment+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_comment(self, request: operations.GetCommentRequest) -> operations.GetCommentResponse:
        r"""Get a specific video comment
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{video_id}/comments/{comment_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.comment+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Comment])
                res.comment = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.comment+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_comment_replies(self, request: operations.GetCommentRepliesRequest) -> operations.GetCommentRepliesResponse:
        r"""Get all the replies to a video comment
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{video_id}/comments/{comment_id}/replies", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommentRepliesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.comment+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Comment]])
                res.comments = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.comment+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_comments(self, request: operations.GetCommentsRequest) -> operations.GetCommentsResponse:
        r"""Get all the comments on a video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/videos/{video_id}/comments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.comment+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Comment]])
                res.comments = out

        return res

    
    def get_comments_alt1(self, request: operations.GetCommentsAlt1Request) -> operations.GetCommentsAlt1Response:
        r"""Get all the comments on a video
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/channels/{channel_id}/videos/{video_id}/comments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommentsAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.comment+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Comment]])
                res.comments = out

        return res

    