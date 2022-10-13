from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import memberitem
from . import housemembership


@dataclass_json
@dataclass
class ConstituencyRepresentation:
    member: Optional[memberitem.MemberItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'member' }})
    representation: Optional[housemembership.HouseMembership] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'representation' }})
    
