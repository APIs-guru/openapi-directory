from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetMultiNodeInventoryForAllSkuAndAllShipNodesQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    next_cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextCursor', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMultiNodeInventoryForAllSkuAndAllShipNodesHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    wm_consumer_channel_type: str = field(default=None, metadata={'header': { 'field_name': 'WM_CONSUMER.CHANNEL.TYPE' }})
    wm_qos_correlation_id: str = field(default=None, metadata={'header': { 'field_name': 'WM_QOS.CORRELATION_ID' }})
    wm_sec_access_token: str = field(default=None, metadata={'header': { 'field_name': 'WM_SEC.ACCESS_TOKEN' }})
    wm_svc_name: str = field(default=None, metadata={'header': { 'field_name': 'WM_SVC.NAME' }})
    

@dataclass
class GetMultiNodeInventoryForAllSkuAndAllShipNodesRequest:
    query_params: GetMultiNodeInventoryForAllSkuAndAllShipNodesQueryParams = field(default=None)
    headers: GetMultiNodeInventoryForAllSkuAndAllShipNodesHeaders = field(default=None)
    
class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesAvailToSellQtyUnitEnum(str, Enum):
    EACH = "EACH"


@dataclass_json
@dataclass
class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesAvailToSellQty:
    amount: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    unit: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesAvailToSellQtyUnitEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    
class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesInputQtyUnitEnum(str, Enum):
    EACH = "EACH"


@dataclass_json
@dataclass
class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesInputQty:
    amount: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    unit: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesInputQtyUnitEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    

@dataclass_json
@dataclass
class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodes:
    avail_to_sell_qty: Optional[GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesAvailToSellQty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availToSellQty' }})
    input_qty: Optional[GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesInputQty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputQty' }})
    ship_node: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipNode' }})
    

@dataclass_json
@dataclass
class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventories:
    nodes: Optional[List[GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodes' }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    

@dataclass_json
@dataclass
class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElements:
    inventories: Optional[List[GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventories]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventories' }})
    

@dataclass_json
@dataclass
class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONMeta:
    next_cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextCursor' }})
    total_count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCount' }})
    

@dataclass_json
@dataclass
class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSON:
    elements: Optional[GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElements] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'elements' }})
    meta: Optional[GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class GetMultiNodeInventoryForAllSkuAndAllShipNodesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_multi_node_inventory_for_all_sku_and_all_ship_nodes_200_application_json_object: Optional[GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSON] = field(default=None)
    
