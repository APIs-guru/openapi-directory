from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetWfsInventoryQueryParams:
    from_modified_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fromModifiedDate', 'style': 'form', 'explode': True }})
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sku: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sku', 'style': 'form', 'explode': True }})
    to_modified_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'toModifiedDate', 'style': 'form', 'explode': True }})
    

@dataclass
class GetWfsInventoryHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    wm_consumer_channel_type: str = field(default=None, metadata={'header': { 'field_name': 'WM_CONSUMER.CHANNEL.TYPE' }})
    wm_qos_correlation_id: str = field(default=None, metadata={'header': { 'field_name': 'WM_QOS.CORRELATION_ID' }})
    wm_sec_access_token: str = field(default=None, metadata={'header': { 'field_name': 'WM_SEC.ACCESS_TOKEN' }})
    wm_svc_name: str = field(default=None, metadata={'header': { 'field_name': 'WM_SVC.NAME' }})
    

@dataclass
class GetWfsInventoryRequest:
    query_params: GetWfsInventoryQueryParams = field(default=None)
    headers: GetWfsInventoryHeaders = field(default=None)
    

@dataclass_json
@dataclass
class GetWfsInventory200ApplicationJSONHeaders:
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCount' }})
    

@dataclass_json
@dataclass
class GetWfsInventory200ApplicationJSONPayloadInventoryShipNodes:
    avail_to_sell_qty: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availToSellQty' }})
    modified_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifiedDate' }})
    on_hand_qty: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onHandQty' }})
    ship_node_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipNodeType' }})
    

@dataclass_json
@dataclass
class GetWfsInventory200ApplicationJSONPayloadInventory:
    ship_nodes: Optional[List[GetWfsInventory200ApplicationJSONPayloadInventoryShipNodes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipNodes' }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    

@dataclass_json
@dataclass
class GetWfsInventory200ApplicationJSONPayload:
    inventory: Optional[List[GetWfsInventory200ApplicationJSONPayloadInventory]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventory' }})
    

@dataclass_json
@dataclass
class GetWfsInventory200ApplicationJSON:
    headers: Optional[GetWfsInventory200ApplicationJSONHeaders] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    payload: Optional[GetWfsInventory200ApplicationJSONPayload] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    

@dataclass
class GetWfsInventoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_wfs_inventory_200_application_json_object: Optional[GetWfsInventory200ApplicationJSON] = field(default=None)
    
