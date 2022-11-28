import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Nodes:
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

    
    def apply_node(self, request: operations.ApplyNodeRequest) -> operations.ApplyNodeResponse:
        r"""Trigger an agent run
        This API allows to trigger an agent run on the target node. Response is a stream of the actual agent run on the node.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/nodes/{nodeId}/applyPolicy", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ApplyNodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.apply_node_200_text_plain_string = r.content

        return res

    
    def apply_policy_all_nodes(self) -> operations.ApplyPolicyAllNodesResponse:
        r"""Trigger an agent run on all nodes
        This API allows to trigger an agent run on all nodes. Response contains a json stating if agent could be started on each node, but not if the run went fine and do not display any output from it. You can see the result of the run in Rudder web interface or in the each agent logs.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/nodes/applyPolicy"
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ApplyPolicyAllNodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ApplyPolicyAllNodes200ApplicationJSON])
                res.apply_policy_all_nodes_200_application_json_object = out

        return res

    
    def change_pending_node_status(self, request: operations.ChangePendingNodeStatusRequest) -> operations.ChangePendingNodeStatusResponse:
        r"""Update pending Node status
        Accept or refuse a pending node
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/nodes/pending/{nodeId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChangePendingNodeStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ChangePendingNodeStatus200ApplicationJSON])
                res.change_pending_node_status_200_application_json_object = out

        return res

    
    def delete_node(self, request: operations.DeleteNodeRequest) -> operations.DeleteNodeResponse:
        r"""Delete a node
        Remove a node from the Rudder server. It won't be managed anymore.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/nodes/{nodeId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteNode200ApplicationJSON])
                res.delete_node_200_application_json_object = out

        return res

    
    def get_nodes_status(self, request: operations.GetNodesStatusRequest) -> operations.GetNodesStatusResponse:
        r"""Get nodes acceptation status
        Get acceptation status (pending, accepted, deleted, unknown) of a list of nodes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/nodes/status"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNodesStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNodesStatus200ApplicationJSON])
                res.get_nodes_status_200_application_json_object = out

        return res

    
    def list_accepted_nodes(self, request: operations.ListAcceptedNodesRequest) -> operations.ListAcceptedNodesResponse:
        r"""List managed nodes
        Get information about the nodes managed by the target server
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/nodes"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAcceptedNodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAcceptedNodes200ApplicationJSON])
                res.list_accepted_nodes_200_application_json_object = out

        return res

    
    def list_pending_nodes(self, request: operations.ListPendingNodesRequest) -> operations.ListPendingNodesResponse:
        r"""List pending nodes
        Get information about the nodes pending acceptation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/nodes/pending"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListPendingNodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPendingNodes200ApplicationJSON])
                res.list_pending_nodes_200_application_json_object = out

        return res

    
    def node_details(self, request: operations.NodeDetailsRequest) -> operations.NodeDetailsResponse:
        r"""Get information about a node
        Get details about a given node
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/nodes/{nodeId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.NodeDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.NodeDetails200ApplicationJSON])
                res.node_details_200_application_json_object = out

        return res

    
    def node_inherited_properties(self, request: operations.NodeInheritedPropertiesRequest) -> operations.NodeInheritedPropertiesResponse:
        r"""Get inherited node properties for a node
        This API returns all node properties for a node, including group inherited ones.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/nodes/{nodeId}/inheritedProperties", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.NodeInheritedPropertiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.NodeInheritedProperties200ApplicationJSON])
                res.node_inherited_properties_200_application_json_object = out

        return res

    
    def update_node(self, request: operations.UpdateNodeRequest) -> operations.UpdateNodeResponse:
        r"""Update node settings and properties
        Update node settings and properties
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/nodes/{nodeId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateNode200ApplicationJSON])
                res.update_node_200_application_json_object = out

        return res

    