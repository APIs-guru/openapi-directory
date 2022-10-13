from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DatasetRestAPIPost:
    database: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'database' }})
    owners: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owners' }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'table_name' }})
    
