from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import giftcard


@dataclass_json
@dataclass
class ListGiftCardsResponse:
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    gift_cards: Optional[List[giftcard.GiftCard]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gift_cards' }})
    
