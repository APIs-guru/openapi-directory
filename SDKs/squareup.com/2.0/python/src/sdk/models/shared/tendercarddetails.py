from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import card


@dataclass_json
@dataclass
class TenderCardDetails:
    card: Optional[card.Card] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card' }})
    entry_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entry_method' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
