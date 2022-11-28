from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MemberBiography:
    committee_memberships: Optional[List[BiographyItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('committeeMemberships') }})
    elections_contested: Optional[List[BiographyItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('electionsContested') }})
    government_posts: Optional[List[BiographyItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('governmentPosts') }})
    house_memberships: Optional[List[BiographyItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('houseMemberships') }})
    opposition_posts: Optional[List[BiographyItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oppositionPosts') }})
    other_posts: Optional[List[BiographyItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otherPosts') }})
    party_affiliations: Optional[List[BiographyItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partyAffiliations') }})
    representations: Optional[List[BiographyItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('representations') }})
    
