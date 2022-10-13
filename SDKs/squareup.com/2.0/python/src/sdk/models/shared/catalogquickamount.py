from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import money


@dataclass_json
@dataclass
class CatalogQuickAmount:
    amount: money.Money = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    ordinal: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ordinal' }})
    score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
