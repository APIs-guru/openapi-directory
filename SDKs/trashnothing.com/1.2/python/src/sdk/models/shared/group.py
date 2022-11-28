from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GroupCountry:
    r"""GroupCountry
    Provides information about the country that is associated with a group.  May be null.
    """
    
    abbreviation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abbreviation') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class GroupMembershipQuestionnaire:
    r"""GroupMembershipQuestionnaire
    Membership questionnaire data.  Will be null unless the membership status is pending-questions.
    """
    
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    questions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questions') }})
    

@dataclass_json
@dataclass
class GroupMembership:
    r"""GroupMembership
    Provides information about the current users' active or pending membership to this group (if any).  Will be null if there is no active or pending membership to this group.
    
    """
    
    date_: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    questionnaire: Optional[GroupMembershipQuestionnaire] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questionnaire') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class GroupRegion:
    r"""GroupRegion
    Provides information about an area within a country that a group is associated with (eg. a state in the US or a province in Canada).  May be null.
    """
    
    abbreviation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abbreviation') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class Group:
    r"""Group
    Groups are run by volunteer moderators and provide a way to group activity in a specific location. Because each group is usually run by different people, there can be variations in rules from group to group (eg. who is allowed to join, what is allowed to be posted, how often reposts are allowed).
    
    """
    
    country: Optional[GroupCountry] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_id') }})
    has_questions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_questions') }})
    homepage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homepage') }})
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    member_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('member_count') }})
    membership: Optional[GroupMembership] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membership') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    open_archives: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('open_archives') }})
    open_membership: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('open_membership') }})
    region: Optional[GroupRegion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    utc_offset: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('utc_offset') }})
    
