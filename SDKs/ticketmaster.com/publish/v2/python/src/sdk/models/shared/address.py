from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Address:
    line1s: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line1s' }})
    line2s: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line2s' }})
    line3s: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line3s' }})
    
