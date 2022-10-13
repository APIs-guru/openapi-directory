from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import giftcardactivity


@dataclass_json
@dataclass
class ListGiftCardActivitiesResponse:
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    gift_card_activities: Optional[List[giftcardactivity.GiftCardActivity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gift_card_activities' }})
    
