from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PayorLinksResponse:
    links: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    payors: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payors' }})
    
