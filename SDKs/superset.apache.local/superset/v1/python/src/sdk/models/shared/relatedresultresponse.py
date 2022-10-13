from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RelatedResultResponse:
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
