from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AccountAccess:
    authorized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorized' }})
    unique_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unique_id' }})
    
