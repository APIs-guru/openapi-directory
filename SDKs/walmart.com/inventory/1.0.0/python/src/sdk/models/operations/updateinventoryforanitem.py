from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateInventoryForAnItemQueryParams:
    sku: str = field(metadata={'query_param': { 'field_name': 'sku', 'style': 'form', 'explode': True }})
    ship_node: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'shipNode', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateInventoryForAnItemHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    wm_consumer_channel_type: str = field(metadata={'header': { 'field_name': 'WM_CONSUMER.CHANNEL.TYPE', 'style': 'simple', 'explode': False }})
    wm_qos_correlation_id: str = field(metadata={'header': { 'field_name': 'WM_QOS.CORRELATION_ID', 'style': 'simple', 'explode': False }})
    wm_sec_access_token: str = field(metadata={'header': { 'field_name': 'WM_SEC.ACCESS_TOKEN', 'style': 'simple', 'explode': False }})
    wm_svc_name: str = field(metadata={'header': { 'field_name': 'WM_SVC.NAME', 'style': 'simple', 'explode': False }})
    
class UpdateInventoryForAnItemApplicationJSONQuantityUnitEnum(str, Enum):
    EACH = "EACH"


@dataclass_json
@dataclass
class UpdateInventoryForAnItemApplicationJSONQuantity:
    amount: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    unit: UpdateInventoryForAnItemApplicationJSONQuantityUnitEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    

@dataclass_json
@dataclass
class UpdateInventoryForAnItemApplicationJSON:
    quantity: UpdateInventoryForAnItemApplicationJSONQuantity = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    sku: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    

@dataclass
class UpdateInventoryForAnItemRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    object: Optional[UpdateInventoryForAnItemApplicationJSON] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class UpdateInventoryForAnItem200ApplicationJSONQuantityUnitEnum(str, Enum):
    EACH = "EACH"


@dataclass_json
@dataclass
class UpdateInventoryForAnItem200ApplicationJSONQuantity:
    amount: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    unit: UpdateInventoryForAnItem200ApplicationJSONQuantityUnitEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    

@dataclass_json
@dataclass
class UpdateInventoryForAnItem200ApplicationJSON:
    quantity: UpdateInventoryForAnItem200ApplicationJSONQuantity = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    sku: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    

@dataclass
class UpdateInventoryForAnItemRequest:
    headers: UpdateInventoryForAnItemHeaders = field()
    query_params: UpdateInventoryForAnItemQueryParams = field()
    request: UpdateInventoryForAnItemRequests = field()
    

@dataclass
class UpdateInventoryForAnItemResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    update_inventory_for_an_item_200_application_json_object: Optional[UpdateInventoryForAnItem200ApplicationJSON] = field(default=None)
    
