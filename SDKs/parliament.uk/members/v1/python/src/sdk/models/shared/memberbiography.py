from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import biographyitem
from . import biographyitem
from . import biographyitem
from . import biographyitem
from . import biographyitem
from . import biographyitem
from . import biographyitem
from . import biographyitem


@dataclass_json
@dataclass
class MemberBiography:
    committee_memberships: Optional[List[biographyitem.BiographyItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committeeMemberships' }})
    elections_contested: Optional[List[biographyitem.BiographyItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'electionsContested' }})
    government_posts: Optional[List[biographyitem.BiographyItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'governmentPosts' }})
    house_memberships: Optional[List[biographyitem.BiographyItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'houseMemberships' }})
    opposition_posts: Optional[List[biographyitem.BiographyItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oppositionPosts' }})
    other_posts: Optional[List[biographyitem.BiographyItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otherPosts' }})
    party_affiliations: Optional[List[biographyitem.BiographyItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partyAffiliations' }})
    representations: Optional[List[biographyitem.BiographyItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'representations' }})
    
