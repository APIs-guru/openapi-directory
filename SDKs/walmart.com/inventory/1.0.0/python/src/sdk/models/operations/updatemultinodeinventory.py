from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateMultiNodeInventoryPathParams:
    sku: str = field(default=None, metadata={'path_param': { 'field_name': 'sku', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateMultiNodeInventoryHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    wm_consumer_channel_type: str = field(default=None, metadata={'header': { 'field_name': 'WM_CONSUMER.CHANNEL.TYPE' }})
    wm_qos_correlation_id: str = field(default=None, metadata={'header': { 'field_name': 'WM_QOS.CORRELATION_ID' }})
    wm_sec_access_token: str = field(default=None, metadata={'header': { 'field_name': 'WM_SEC.ACCESS_TOKEN' }})
    wm_svc_name: str = field(default=None, metadata={'header': { 'field_name': 'WM_SVC.NAME' }})
    
class UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnum(str, Enum):
    EACH = "EACH"


@dataclass_json
@dataclass
class UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty:
    amount: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    unit: UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    

@dataclass_json
@dataclass
class UpdateMultiNodeInventoryRequestBodyInventoriesNodes:
    input_qty: UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputQty' }})
    ship_node: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipNode' }})
    

@dataclass_json
@dataclass
class UpdateMultiNodeInventoryRequestBodyInventories:
    nodes: List[UpdateMultiNodeInventoryRequestBodyInventoriesNodes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodes' }})
    

@dataclass_json
@dataclass
class UpdateMultiNodeInventoryRequestBody:
    inventories: UpdateMultiNodeInventoryRequestBodyInventories = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventories' }})
    

@dataclass
class UpdateMultiNodeInventoryRequest:
    path_params: UpdateMultiNodeInventoryPathParams = field(default=None)
    headers: UpdateMultiNodeInventoryHeaders = field(default=None)
    request: UpdateMultiNodeInventoryRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class UpdateMultiNodeInventory200ApplicationJSONNodesErrorsCategoryEnum(str, Enum):
    APPLICATION = "APPLICATION"
    SYSTEM = "SYSTEM"
    REQUEST = "REQUEST"
    DATA = "DATA"


@dataclass_json
@dataclass
class UpdateMultiNodeInventory200ApplicationJSONNodesErrorsCauses:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class UpdateMultiNodeInventory200ApplicationJSONNodesErrorsSeverityEnum(str, Enum):
    INFO = "INFO"
    WARN = "WARN"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class UpdateMultiNodeInventory200ApplicationJSONNodesErrors:
    category: Optional[UpdateMultiNodeInventory200ApplicationJSONNodesErrorsCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    causes: Optional[List[UpdateMultiNodeInventory200ApplicationJSONNodesErrorsCauses]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'causes' }})
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    error_identifiers: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorIdentifiers' }})
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'info' }})
    severity: Optional[UpdateMultiNodeInventory200ApplicationJSONNodesErrorsSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    

@dataclass_json
@dataclass
class UpdateMultiNodeInventory200ApplicationJSONNodes:
    errors: Optional[List[UpdateMultiNodeInventory200ApplicationJSONNodesErrors]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    ship_node: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipNode' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class UpdateMultiNodeInventory200ApplicationJSON:
    nodes: Optional[List[UpdateMultiNodeInventory200ApplicationJSONNodes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodes' }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    

@dataclass
class UpdateMultiNodeInventoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_multi_node_inventory_200_application_json_object: Optional[UpdateMultiNodeInventory200ApplicationJSON] = field(default=None)
    
