from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SaveSubTransaction:
    amount: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category_id' }})
    memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memo' }})
    payee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payee_id' }})
    payee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payee_name' }})
    
