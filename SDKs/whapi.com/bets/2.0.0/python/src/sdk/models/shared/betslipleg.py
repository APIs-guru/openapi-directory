from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import betslippart


@dataclass_json
@dataclass
class Betslipleg:
    parts: List[betslippart.Betslippart] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parts' }})
    sort: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sort' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
