from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import housemembership
from . import membername
from . import memberparty


@dataclass_json
@dataclass
class MemberHistory:
    house_membership_history: Optional[List[housemembership.HouseMembership]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'houseMembershipHistory' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name_history: Optional[List[membername.MemberName]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nameHistory' }})
    party_history: Optional[List[memberparty.MemberParty]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partyHistory' }})
    thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnailUrl' }})
    
