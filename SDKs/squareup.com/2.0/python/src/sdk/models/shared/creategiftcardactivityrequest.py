from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import giftcardactivity


@dataclass_json
@dataclass
class CreateGiftCardActivityRequest:
    gift_card_activity: giftcardactivity.GiftCardActivity = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gift_card_activity' }})
    idempotency_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotency_key' }})
    
