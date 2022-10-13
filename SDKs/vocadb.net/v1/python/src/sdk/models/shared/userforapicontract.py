from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import userknownlanguagecontract
from . import entrythumbforapicontract
from . import oldusernamecontract

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
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    group_id: Optional[UserForAPIContractGroupIDEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupId' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    known_languages: Optional[List[userknownlanguagecontract.UserKnownLanguageContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'knownLanguages' }})
    main_picture: Optional[entrythumbforapicontract.EntryThumbForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mainPicture' }})
    member_since: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberSince', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    old_usernames: Optional[List[oldusernamecontract.OldUsernameContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oldUsernames' }})
    verified_artist: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verifiedArtist' }})
    
