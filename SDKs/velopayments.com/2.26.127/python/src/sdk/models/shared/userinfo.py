from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import mfadetails
from . import usertype_2_enum


@dataclass_json
@dataclass
class UserInfo:
    mfa_details: Optional[mfadetails.MfaDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mfa_details' }})
    user_type: Optional[usertype_2_enum.UserType2Enum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userType' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_id' }})
    
