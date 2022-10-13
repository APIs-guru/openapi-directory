from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PurchaseInteractionBuy:
    drm: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'drm' }})
    
class PurchaseInteractionSubscribeStreamEnum(str, Enum):
    AVAILABLE = "available"
    PURCHASED = "purchased"
    RESTRICTED = "restricted"
    UNAVAILABLE = "unavailable"


@dataclass_json
@dataclass
class PurchaseInteractionSubscribe:
    drm: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'drm' }})
    expires_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_time' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    purchase_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchase_time' }})
    stream: Optional[PurchaseInteractionSubscribeStreamEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stream' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class PurchaseInteraction:
    buy: Optional[PurchaseInteractionBuy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buy' }})
    rent: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rent' }})
    subscribe: Optional[PurchaseInteractionSubscribe] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscribe' }})
    
