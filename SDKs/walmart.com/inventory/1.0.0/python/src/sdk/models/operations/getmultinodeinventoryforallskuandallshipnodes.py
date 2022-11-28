from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetMultiNodeInventoryForAllSkuAndAllShipNodesQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    next_cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextCursor', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMultiNodeInventoryForAllSkuAndAllShipNodesHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    wm_consumer_channel_type: str = field(metadata={'header': { 'field_name': 'WM_CONSUMER.CHANNEL.TYPE', 'style': 'simple', 'explode': False }})
    wm_qos_correlation_id: str = field(metadata={'header': { 'field_name': 'WM_QOS.CORRELATION_ID', 'style': 'simple', 'explode': False }})
    wm_sec_access_token: str = field(metadata={'header': { 'field_name': 'WM_SEC.ACCESS_TOKEN', 'style': 'simple', 'explode': False }})
    wm_svc_name: str = field(metadata={'header': { 'field_name': 'WM_SVC.NAME', 'style': 'simple', 'explode': False }})
    
class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesAvailToSellQtyUnitEnum(str, Enum):
    EACH = "EACH"


@dataclass_json
@dataclass
class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesAvailToSellQty:
    amount: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    unit: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesAvailToSellQtyUnitEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    
class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesInputQtyUnitEnum(str, Enum):
    EACH = "EACH"


@dataclass_json
@dataclass
class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesInputQty:
    amount: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    unit: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesInputQtyUnitEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    

@dataclass_json
@dataclass
class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodes:
    avail_to_sell_qty: Optional[GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesAvailToSellQty] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availToSellQty') }})
    input_qty: Optional[GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodesInputQty] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputQty') }})
    ship_node: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipNode') }})
    

@dataclass_json
@dataclass
class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventories:
    nodes: Optional[List[GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventoriesNodes]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes') }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    

@dataclass_json
@dataclass
class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElements:
    inventories: Optional[List[GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElementsInventories]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventories') }})
    

@dataclass_json
@dataclass
class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONMeta:
    next_cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextCursor') }})
    total_count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCount') }})
    

@dataclass_json
@dataclass
class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSON:
    elements: Optional[GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONElements] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elements') }})
    meta: Optional[GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class GetMultiNodeInventoryForAllSkuAndAllShipNodesRequest:
    headers: GetMultiNodeInventoryForAllSkuAndAllShipNodesHeaders = field()
    query_params: GetMultiNodeInventoryForAllSkuAndAllShipNodesQueryParams = field()
    

@dataclass
class GetMultiNodeInventoryForAllSkuAndAllShipNodesResponse:
    content_type: str = field()
    status_code: int = field()
    get_multi_node_inventory_for_all_sku_and_all_ship_nodes_200_application_json_object: Optional[GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSON] = field(default=None)
    
