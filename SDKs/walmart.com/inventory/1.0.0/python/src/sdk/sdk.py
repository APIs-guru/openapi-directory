

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://marketplace.walmartapis.com",
	"https://sandbox.walmartapis.com",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
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
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def get_inventory(self, request: operations.GetInventoryRequest) -> operations.GetInventoryResponse:
        r"""Inventory
        You can use this API to get the inventory for a given item.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/inventory"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInventoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetInventory200ApplicationJSON])
                res.get_inventory_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def get_multi_node_inventory_for_all_sku_and_all_ship_nodes(self, request: operations.GetMultiNodeInventoryForAllSkuAndAllShipNodesRequest) -> operations.GetMultiNodeInventoryForAllSkuAndAllShipNodesResponse:
        r"""Multiple Item Inventory for All Ship Nodes
        This API will retrieve the inventory count for all of a seller's items across all ship nodes by item to ship node mapping. Inventory can be zero or non-zero.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/inventories"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMultiNodeInventoryForAllSkuAndAllShipNodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSON])
                res.get_multi_node_inventory_for_all_sku_and_all_ship_nodes_200_application_json_object = out

        return res

    
    def get_multi_node_inventory_for_sku_and_all_shipnodes(self, request: operations.GetMultiNodeInventoryForSkuAndAllShipnodesRequest) -> operations.GetMultiNodeInventoryForSkuAndAllShipnodesResponse:
        r"""Single Item Inventory by Ship Node
        This API will retrieve the inventory count for an item across all ship nodes or one specific ship node. You can specify the ship node for which you want to fetch the inventory
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/inventories/{sku}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMultiNodeInventoryForSkuAndAllShipnodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSON])
                res.get_multi_node_inventory_for_sku_and_all_shipnodes_200_application_json_object = out

        return res

    
    def get_wfs_inventory(self, request: operations.GetWfsInventoryRequest) -> operations.GetWfsInventoryResponse:
        r"""WFS Inventory
        You can use this API to get the current Available to Sell inventory quantities for all WFS items in your catalog. You can also query specific SKUs or filter to only items updated after a specific date in order to reduce the response size.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/fulfillment/inventory"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWfsInventoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetWfsInventory200ApplicationJSON])
                res.get_wfs_inventory_200_application_json_object = out

        return res

    
    def update_bulk_inventory(self, request: operations.UpdateBulkInventoryRequest) -> operations.UpdateBulkInventoryResponse:
        r"""Bulk Item Inventory Update
        Updates inventory for items in bulk. Refer to the throttling limits before uploading the Feed files.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/feeds"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateBulkInventoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateBulkInventory200ApplicationJSON])
                res.update_bulk_inventory_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def update_inventory_for_an_item(self, request: operations.UpdateInventoryForAnItemRequest) -> operations.UpdateInventoryForAnItemResponse:
        r"""Update inventory
        Updates the inventory for a given item.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/inventory"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateInventoryForAnItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateInventoryForAnItem200ApplicationJSON])
                res.update_inventory_for_an_item_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def update_multi_node_inventory(self, request: operations.UpdateMultiNodeInventoryRequest) -> operations.UpdateMultiNodeInventoryResponse:
        r"""Update Item Inventory per Ship Node
        This API will update the inventory for an item across one or more fulfillment centers, known as ship nodes.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/inventories/{sku}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateMultiNodeInventoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateMultiNodeInventory200ApplicationJSON])
                res.update_multi_node_inventory_200_application_json_object = out

        return res

    