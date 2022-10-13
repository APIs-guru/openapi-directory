from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Sentiment:
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    negation_term: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'negationTerm' }})
    parent_category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentCategory' }})
    positive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'positive' }})
    scale: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scale' }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
