from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetInventoryQueryParams:
    sku: str = field(metadata={'query_param': { 'field_name': 'sku', 'style': 'form', 'explode': True }})
    ship_node: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'shipNode', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInventoryHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    wm_consumer_channel_type: str = field(metadata={'header': { 'field_name': 'WM_CONSUMER.CHANNEL.TYPE', 'style': 'simple', 'explode': False }})
    wm_qos_correlation_id: str = field(metadata={'header': { 'field_name': 'WM_QOS.CORRELATION_ID', 'style': 'simple', 'explode': False }})
    wm_sec_access_token: str = field(metadata={'header': { 'field_name': 'WM_SEC.ACCESS_TOKEN', 'style': 'simple', 'explode': False }})
    wm_svc_name: str = field(metadata={'header': { 'field_name': 'WM_SVC.NAME', 'style': 'simple', 'explode': False }})
    
class GetInventory200ApplicationJSONQuantityUnitEnum(str, Enum):
    EACH = "EACH"


@dataclass_json
@dataclass
class GetInventory200ApplicationJSONQuantity:
    amount: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    unit: GetInventory200ApplicationJSONQuantityUnitEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    

@dataclass_json
@dataclass
class GetInventory200ApplicationJSON:
    quantity: GetInventory200ApplicationJSONQuantity = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    sku: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    

@dataclass
class GetInventoryRequest:
    headers: GetInventoryHeaders = field()
    query_params: GetInventoryQueryParams = field()
    

@dataclass
class GetInventoryResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    get_inventory_200_application_json_object: Optional[GetInventory200ApplicationJSON] = field(default=None)
    
