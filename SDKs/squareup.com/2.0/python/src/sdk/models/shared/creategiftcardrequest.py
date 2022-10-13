from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import giftcard


@dataclass_json
@dataclass
class CreateGiftCardRequest:
    gift_card: giftcard.GiftCard = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gift_card' }})
    idempotency_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotency_key' }})
    location_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    
