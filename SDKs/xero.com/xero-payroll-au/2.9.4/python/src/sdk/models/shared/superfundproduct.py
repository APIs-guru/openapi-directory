from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SuperFundProduct:
    abn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ABN' }})
    product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductName' }})
    spin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SPIN' }})
    usi: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'USI' }})
    
