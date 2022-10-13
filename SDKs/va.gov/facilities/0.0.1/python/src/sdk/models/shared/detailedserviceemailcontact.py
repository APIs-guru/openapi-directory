from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DetailedServiceEmailContact:
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email_address' }})
    email_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email_label' }})
    
