from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import address


@dataclass_json
@dataclass
class UpdateCustomerRequest:
    address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    birthday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'birthday' }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company_name' }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email_address' }})
    family_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'family_name' }})
    given_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'given_name' }})
    nickname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nickname' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone_number' }})
    reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference_id' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
