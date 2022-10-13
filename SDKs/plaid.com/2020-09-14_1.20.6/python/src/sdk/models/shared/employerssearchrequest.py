from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EmployersSearchRequest:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    products: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'products' }})
    query: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    
