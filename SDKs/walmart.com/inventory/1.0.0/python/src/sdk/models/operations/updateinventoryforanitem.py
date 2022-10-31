from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateInventoryForAnItemQueryParams:
    ship_node: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'shipNode', 'style': 'form', 'explode': True }})
    sku: str = field(default=None, metadata={'query_param': { 'field_name': 'sku', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateInventoryForAnItemHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    wm_consumer_channel_type: str = field(default=None, metadata={'header': { 'field_name': 'WM_CONSUMER.CHANNEL.TYPE', 'style': 'simple', 'explode': False }})
    wm_qos_correlation_id: str = field(default=None, metadata={'header': { 'field_name': 'WM_QOS.CORRELATION_ID', 'style': 'simple', 'explode': False }})
    wm_sec_access_token: str = field(default=None, metadata={'header': { 'field_name': 'WM_SEC.ACCESS_TOKEN', 'style': 'simple', 'explode': False }})
    wm_svc_name: str = field(default=None, metadata={'header': { 'field_name': 'WM_SVC.NAME', 'style': 'simple', 'explode': False }})
    
class UpdateInventoryForAnItemApplicationJSONQuantityUnitEnum(str, Enum):
    EACH = "EACH"


@dataclass_json
@dataclass
class UpdateInventoryForAnItemApplicationJSONQuantity:
    amount: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    unit: UpdateInventoryForAnItemApplicationJSONQuantityUnitEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    

@dataclass_json
@dataclass
class UpdateInventoryForAnItemApplicationJSON:
    quantity: UpdateInventoryForAnItemApplicationJSONQuantity = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    sku: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    

@dataclass
class UpdateInventoryForAnItemRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    object: Optional[UpdateInventoryForAnItemApplicationJSON] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateInventoryForAnItemRequest:
    query_params: UpdateInventoryForAnItemQueryParams = field(default=None)
    headers: UpdateInventoryForAnItemHeaders = field(default=None)
    request: UpdateInventoryForAnItemRequests = field(default=None)
    
class UpdateInventoryForAnItem200ApplicationJSONQuantityUnitEnum(str, Enum):
    EACH = "EACH"


@dataclass_json
@dataclass
class UpdateInventoryForAnItem200ApplicationJSONQuantity:
    amount: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    unit: UpdateInventoryForAnItem200ApplicationJSONQuantityUnitEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    

@dataclass_json
@dataclass
class UpdateInventoryForAnItem200ApplicationJSON:
    quantity: UpdateInventoryForAnItem200ApplicationJSONQuantity = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    sku: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    

@dataclass
class UpdateInventoryForAnItemResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_inventory_for_an_item_200_application_json_object: Optional[UpdateInventoryForAnItem200ApplicationJSON] = field(default=None)
    
