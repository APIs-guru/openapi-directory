from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MemberHistory:
    house_membership_history: Optional[List[HouseMembership]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('houseMembershipHistory') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name_history: Optional[List[MemberName]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameHistory') }})
    party_history: Optional[List[MemberParty]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partyHistory') }})
    thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnailUrl') }})
    
