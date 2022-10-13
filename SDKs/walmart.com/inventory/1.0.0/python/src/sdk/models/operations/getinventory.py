from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetInventoryQueryParams:
    ship_node: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'shipNode', 'style': 'form', 'explode': True }})
    sku: str = field(default=None, metadata={'query_param': { 'field_name': 'sku', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInventoryHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    wm_consumer_channel_type: str = field(default=None, metadata={'header': { 'field_name': 'WM_CONSUMER.CHANNEL.TYPE' }})
    wm_qos_correlation_id: str = field(default=None, metadata={'header': { 'field_name': 'WM_QOS.CORRELATION_ID' }})
    wm_sec_access_token: str = field(default=None, metadata={'header': { 'field_name': 'WM_SEC.ACCESS_TOKEN' }})
    wm_svc_name: str = field(default=None, metadata={'header': { 'field_name': 'WM_SVC.NAME' }})
    

@dataclass
class GetInventoryRequest:
    query_params: GetInventoryQueryParams = field(default=None)
    headers: GetInventoryHeaders = field(default=None)
    
class GetInventory200ApplicationJSONQuantityUnitEnum(str, Enum):
    EACH = "EACH"


@dataclass_json
@dataclass
class GetInventory200ApplicationJSONQuantity:
    amount: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    unit: GetInventory200ApplicationJSONQuantityUnitEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    

@dataclass_json
@dataclass
class GetInventory200ApplicationJSON:
    quantity: GetInventory200ApplicationJSONQuantity = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    sku: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    

@dataclass
class GetInventoryResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_inventory_200_application_json_object: Optional[GetInventory200ApplicationJSON] = field(default=None)
    
