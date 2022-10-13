from dataclasses import dataclass, field
from typing import Any,List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class KeyCredentialsUpdateParameters:
    value: List[dict[str, dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
