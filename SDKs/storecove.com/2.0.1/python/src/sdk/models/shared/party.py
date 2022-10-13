from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import address
from . import contact


@dataclass_json
@dataclass
class Party:
    address: address.Address = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    company_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companyName' }})
    contact: Optional[contact.Contact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contact' }})
    
