from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TensorflowResourceHandleProto:
    container: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'container' }})
    device: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device' }})
    hash_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hash_code' }})
    maybe_type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maybe_type_name' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
