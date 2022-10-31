from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetMultiNodeInventoryForSkuAndAllShipnodesPathParams:
    sku: str = field(default=None, metadata={'path_param': { 'field_name': 'sku', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMultiNodeInventoryForSkuAndAllShipnodesQueryParams:
    ship_node: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'shipNode', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMultiNodeInventoryForSkuAndAllShipnodesHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    wm_consumer_channel_type: str = field(default=None, metadata={'header': { 'field_name': 'WM_CONSUMER.CHANNEL.TYPE', 'style': 'simple', 'explode': False }})
    wm_qos_correlation_id: str = field(default=None, metadata={'header': { 'field_name': 'WM_QOS.CORRELATION_ID', 'style': 'simple', 'explode': False }})
    wm_sec_access_token: str = field(default=None, metadata={'header': { 'field_name': 'WM_SEC.ACCESS_TOKEN', 'style': 'simple', 'explode': False }})
    wm_svc_name: str = field(default=None, metadata={'header': { 'field_name': 'WM_SVC.NAME', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMultiNodeInventoryForSkuAndAllShipnodesRequest:
    path_params: GetMultiNodeInventoryForSkuAndAllShipnodesPathParams = field(default=None)
    query_params: GetMultiNodeInventoryForSkuAndAllShipnodesQueryParams = field(default=None)
    headers: GetMultiNodeInventoryForSkuAndAllShipnodesHeaders = field(default=None)
    
class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesAvailToSellQtyUnitEnum(str, Enum):
    EACH = "EACH"


@dataclass_json
@dataclass
class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesAvailToSellQty:
    amount: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    unit: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesAvailToSellQtyUnitEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    
class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsCategoryEnum(str, Enum):
    APPLICATION = "APPLICATION"
    SYSTEM = "SYSTEM"
    REQUEST = "REQUEST"
    DATA = "DATA"


@dataclass_json
@dataclass
class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsCauses:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsSeverityEnum(str, Enum):
    INFO = "INFO"
    WARN = "WARN"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrors:
    category: Optional[GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    causes: Optional[List[GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsCauses]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'causes' }})
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    error_identifiers: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorIdentifiers' }})
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'info' }})
    severity: Optional[GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    
class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesInputQtyUnitEnum(str, Enum):
    EACH = "EACH"


@dataclass_json
@dataclass
class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesInputQty:
    amount: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    unit: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesInputQtyUnitEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    

@dataclass_json
@dataclass
class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodes:
    avail_to_sell_qty: Optional[GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesAvailToSellQty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availToSellQty' }})
    errors: Optional[List[GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrors]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    input_qty: Optional[GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesInputQty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputQty' }})
    ship_node: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipNode' }})
    

@dataclass_json
@dataclass
class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSON:
    nodes: Optional[List[GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodes' }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    

@dataclass
class GetMultiNodeInventoryForSkuAndAllShipnodesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_multi_node_inventory_for_sku_and_all_shipnodes_200_application_json_object: Optional[GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSON] = field(default=None)
    
