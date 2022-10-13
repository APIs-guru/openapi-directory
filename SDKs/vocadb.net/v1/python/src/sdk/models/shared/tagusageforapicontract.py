from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tagbasecontract


@dataclass_json
@dataclass
class TagUsageForAPIContract:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    tag: Optional[tagbasecontract.TagBaseContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    
