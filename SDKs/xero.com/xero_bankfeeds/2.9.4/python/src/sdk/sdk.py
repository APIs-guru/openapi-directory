

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://api.xero.com/bankfeeds.xro/1.0",
]


class SDK:
    

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
        
    
    
    
    def create_feed_connections(self, request: operations.CreateFeedConnectionsRequest) -> operations.CreateFeedConnectionsResponse:
        r"""Create one or more new feed connection
        By passing in the FeedConnections array object in the body, you can create one or more new feed connections
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/FeedConnections"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateFeedConnectionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FeedConnections])
                res.feed_connections = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def create_statements(self, request: operations.CreateStatementsRequest) -> operations.CreateStatementsResponse:
        r"""Creates one or more new statements
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Statements"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateStatementsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Statements])
                res.statements = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Statements])
                res.statements = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Statements])
                res.statements = out
        elif r.status_code == 413:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Statements])
                res.statements = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Statements])
                res.statements = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Statements])
                res.statements = out

        return res

    
    def delete_feed_connections(self, request: operations.DeleteFeedConnectionsRequest) -> operations.DeleteFeedConnectionsResponse:
        r"""Delete an existing feed connection
        By passing in FeedConnections array object in the body, you can delete a feed connection.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/FeedConnections/DeleteRequests"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFeedConnectionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FeedConnections])
                res.feed_connections = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_feed_connection(self, request: operations.GetFeedConnectionRequest) -> operations.GetFeedConnectionResponse:
        r"""Retrieve single feed connection based on a unique id provided
        By passing in a FeedConnection Id options, you can search for matching feed connections
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/FeedConnections/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFeedConnectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FeedConnection])
                res.feed_connection = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_feed_connections(self, request: operations.GetFeedConnectionsRequest) -> operations.GetFeedConnectionsResponse:
        r"""Searches for feed connections
        By passing in the appropriate options, you can search for available feed connections in the system.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/FeedConnections"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFeedConnectionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FeedConnections])
                res.feed_connections = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_statement(self, request: operations.GetStatementRequest) -> operations.GetStatementResponse:
        r"""Retrieve single statement based on unique id provided
        By passing in a statement id, you can search for matching statements
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Statements/{statementID}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStatementResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Statement])
                res.statement = out
        elif r.status_code == 404:
            pass

        return res

    
    def get_statements(self, request: operations.GetStatementsRequest) -> operations.GetStatementsResponse:
        r"""Retrieve all statements
        By passing in parameters, you can search for matching statements
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Statements"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStatementsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Statements])
                res.statements = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Statements])
                res.statements = out

        return res

    