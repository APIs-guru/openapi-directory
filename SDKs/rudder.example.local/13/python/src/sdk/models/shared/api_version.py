from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIVersionAll:
    status: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    version: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

@dataclass_json
@dataclass
class APIVersion:
    all: Optional[List[APIVersionAll]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'all' }})
    latest: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latest' }})
    
