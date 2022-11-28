from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateMultiNodeInventoryPathParams:
    sku: str = field(metadata={'path_param': { 'field_name': 'sku', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateMultiNodeInventoryHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    wm_consumer_channel_type: str = field(metadata={'header': { 'field_name': 'WM_CONSUMER.CHANNEL.TYPE', 'style': 'simple', 'explode': False }})
    wm_qos_correlation_id: str = field(metadata={'header': { 'field_name': 'WM_QOS.CORRELATION_ID', 'style': 'simple', 'explode': False }})
    wm_sec_access_token: str = field(metadata={'header': { 'field_name': 'WM_SEC.ACCESS_TOKEN', 'style': 'simple', 'explode': False }})
    wm_svc_name: str = field(metadata={'header': { 'field_name': 'WM_SVC.NAME', 'style': 'simple', 'explode': False }})
    
class UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnum(str, Enum):
    EACH = "EACH"


@dataclass_json
@dataclass
class UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty:
    amount: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    unit: UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    

@dataclass_json
@dataclass
class UpdateMultiNodeInventoryRequestBodyInventoriesNodes:
    input_qty: UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputQty') }})
    ship_node: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipNode') }})
    

@dataclass_json
@dataclass
class UpdateMultiNodeInventoryRequestBodyInventories:
    nodes: List[UpdateMultiNodeInventoryRequestBodyInventoriesNodes] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes') }})
    

@dataclass_json
@dataclass
class UpdateMultiNodeInventoryRequestBody:
    inventories: UpdateMultiNodeInventoryRequestBodyInventories = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventories') }})
    
class UpdateMultiNodeInventory200ApplicationJSONNodesErrorsCategoryEnum(str, Enum):
    APPLICATION = "APPLICATION"
    SYSTEM = "SYSTEM"
    REQUEST = "REQUEST"
    DATA = "DATA"


@dataclass_json
@dataclass
class UpdateMultiNodeInventory200ApplicationJSONNodesErrorsCauses:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class UpdateMultiNodeInventory200ApplicationJSONNodesErrorsSeverityEnum(str, Enum):
    INFO = "INFO"
    WARN = "WARN"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class UpdateMultiNodeInventory200ApplicationJSONNodesErrors:
    r"""UpdateMultiNodeInventory200ApplicationJSONNodesErrors
    Node Update Error description.
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    category: Optional[UpdateMultiNodeInventory200ApplicationJSONNodesErrorsCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    causes: Optional[List[UpdateMultiNodeInventory200ApplicationJSONNodesErrorsCauses]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('causes') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    error_identifiers: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorIdentifiers') }})
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    severity: Optional[UpdateMultiNodeInventory200ApplicationJSONNodesErrorsSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    

@dataclass_json
@dataclass
class UpdateMultiNodeInventory200ApplicationJSONNodes:
    errors: Optional[List[UpdateMultiNodeInventory200ApplicationJSONNodesErrors]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    ship_node: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipNode') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class UpdateMultiNodeInventory200ApplicationJSON:
    nodes: Optional[List[UpdateMultiNodeInventory200ApplicationJSONNodes]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes') }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    

@dataclass
class UpdateMultiNodeInventoryRequest:
    headers: UpdateMultiNodeInventoryHeaders = field()
    path_params: UpdateMultiNodeInventoryPathParams = field()
    request: UpdateMultiNodeInventoryRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateMultiNodeInventoryResponse:
    content_type: str = field()
    status_code: int = field()
    update_multi_node_inventory_200_application_json_object: Optional[UpdateMultiNodeInventory200ApplicationJSON] = field(default=None)
    
