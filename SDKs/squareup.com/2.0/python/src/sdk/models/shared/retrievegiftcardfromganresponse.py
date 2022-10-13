from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import giftcard


@dataclass_json
@dataclass
class RetrieveGiftCardFromGanResponse:
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    gift_card: Optional[giftcard.GiftCard] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gift_card' }})
    
