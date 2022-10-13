from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import housemembership
from . import party


@dataclass_json
@dataclass
class Member:
    gender: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gender' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    latest_house_membership: Optional[housemembership.HouseMembership] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestHouseMembership' }})
    latest_party: Optional[party.Party] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestParty' }})
    name_address_as: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nameAddressAs' }})
    name_display_as: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nameDisplayAs' }})
    name_full_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nameFullTitle' }})
    name_list_as: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nameListAs' }})
    thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnailUrl' }})
    
