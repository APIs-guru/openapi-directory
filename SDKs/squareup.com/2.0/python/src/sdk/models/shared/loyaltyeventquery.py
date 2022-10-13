from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import loyaltyeventfilter


@dataclass_json
@dataclass
class LoyaltyEventQuery:
    filter: Optional[loyaltyeventfilter.LoyaltyEventFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    
