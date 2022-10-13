from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AccountFilter:
    credit: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credit' }})
    depository: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'depository' }})
    investment: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'investment' }})
    loan: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loan' }})
    
