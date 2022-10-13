from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AchDetails:
    account_number_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_number_suffix' }})
    account_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_type' }})
    routing_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routing_number' }})
    
