from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Error:
    developer_message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'developer_message' }})
    error: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_code: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_code' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    
