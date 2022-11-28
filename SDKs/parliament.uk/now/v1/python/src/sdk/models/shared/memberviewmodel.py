from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MemberViewModel:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    latest_house_membership: Optional[HouseMembershipViewModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestHouseMembership') }})
    latest_party: Optional[PartyViewModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestParty') }})
    name_address_as: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameAddressAs') }})
    name_display_as: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameDisplayAs') }})
    name_full_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameFullTitle') }})
    name_list_as: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameListAs') }})
    thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnailUrl') }})
    
