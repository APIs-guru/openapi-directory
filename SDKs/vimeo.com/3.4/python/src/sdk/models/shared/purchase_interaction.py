from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PurchaseInteractionBuy:
    r"""PurchaseInteractionBuy
    Information on purchasing this video.
    """
    
    drm: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drm') }})
    
class PurchaseInteractionSubscribeStreamEnum(str, Enum):
    AVAILABLE = "available"
    PURCHASED = "purchased"
    RESTRICTED = "restricted"
    UNAVAILABLE = "unavailable"


@dataclass_json
@dataclass
class PurchaseInteractionSubscribe:
    r"""PurchaseInteractionSubscribe
    Information on subscribing to this video.
    """
    
    drm: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drm') }})
    expires_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_time') }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    purchase_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchase_time') }})
    stream: Optional[PurchaseInteractionSubscribeStreamEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stream') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class PurchaseInteraction:
    buy: Optional[PurchaseInteractionBuy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buy') }})
    rent: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rent') }})
    subscribe: Optional[PurchaseInteractionSubscribe] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscribe') }})
    
