from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import address
from . import card
from . import customerpreferences


@dataclass_json
@dataclass
class Customer:
    address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    birthday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'birthday' }})
    cards: Optional[List[card.Card]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cards' }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company_name' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    creation_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creation_source' }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email_address' }})
    family_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'family_name' }})
    given_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'given_name' }})
    group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group_ids' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    nickname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nickname' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone_number' }})
    preferences: Optional[customerpreferences.CustomerPreferences] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferences' }})
    reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference_id' }})
    segment_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segment_ids' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
