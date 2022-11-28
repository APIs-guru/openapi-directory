from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class UserForAPIContractGroupIDEnum(str, Enum):
    NOTHING = "Nothing"
    LIMITED = "Limited"
    REGULAR = "Regular"
    TRUSTED = "Trusted"
    MODERATOR = "Moderator"
    ADMIN = "Admin"


@dataclass_json
@dataclass
class UserForAPIContract:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    group_id: Optional[UserForAPIContractGroupIDEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupId') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    known_languages: Optional[List[UserKnownLanguageContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('knownLanguages') }})
    main_picture: Optional[EntryThumbForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainPicture') }})
    member_since: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberSince'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    old_usernames: Optional[List[OldUsernameContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oldUsernames') }})
    verified_artist: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifiedArtist') }})
    
