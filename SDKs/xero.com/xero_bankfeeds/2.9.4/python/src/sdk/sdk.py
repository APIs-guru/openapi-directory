import warnings
import requests
from typing import Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://api.xero.com/bankfeeds.xro/1.0",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def create_feed_connections(self, request: operations.CreateFeedConnectionsRequest) -> operations.CreateFeedConnectionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/FeedConnections"

        headers = utils.get_headers(request.headers)

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = utils.configure_security_client(request.security)

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/Statements"

        headers = utils.get_headers(request.headers)

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/FeedConnections/DeleteRequests"

        headers = utils.get_headers(request.headers)

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = utils.configure_security_client(request.security)

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/FeedConnections/{id}", request.path_params)

        headers = utils.get_headers(request.headers)

        client = utils.configure_security_client(request.security)

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/FeedConnections"

        headers = utils.get_headers(request.headers)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Statements/{statementID}", request.path_params)

        headers = utils.get_headers(request.headers)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/Statements"

        headers = utils.get_headers(request.headers)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

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

    