from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExternalIDObject:
    ean: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ean' }})
    isrc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isrc' }})
    upc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upc' }})
    
