from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GroupCountry:
    abbreviation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abbreviation' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class GroupMembershipQuestionnaire:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    questions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'questions' }})
    

@dataclass_json
@dataclass
class GroupMembership:
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    questionnaire: Optional[GroupMembershipQuestionnaire] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'questionnaire' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class GroupRegion:
    abbreviation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abbreviation' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class Group:
    country: Optional[GroupCountry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group_id' }})
    has_questions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_questions' }})
    homepage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'homepage' }})
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifier' }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    member_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'member_count' }})
    membership: Optional[GroupMembership] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'membership' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    open_archives: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'open_archives' }})
    open_membership: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'open_membership' }})
    region: Optional[GroupRegion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    utc_offset: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'utc_offset' }})
    
