from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PageError:
    status_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_code' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_message' }})
    
