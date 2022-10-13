from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Company2:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    operating_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operatingName' }})
    tax_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxId' }})
    
