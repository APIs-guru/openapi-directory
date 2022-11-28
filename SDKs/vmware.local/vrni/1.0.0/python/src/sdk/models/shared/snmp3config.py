from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class Snmp3ConfigAuthenticationTypeEnum(str, Enum):
    NO_AUTH = "NO_AUTH"
    MD5 = "MD5"
    SHA = "SHA"

class Snmp3ConfigPrivacyTypeEnum(str, Enum):
    AES = "AES"
    DES = "DES"
    AES128 = "AES128"
    AES192 = "AES192"
    AES256 = "AES256"
    THREE_DES = "3DES"
    NO_PRIV = "NO_PRIV"


@dataclass_json
@dataclass
class Snmp3Config:
    authentication_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication_password') }})
    authentication_type: Optional[Snmp3ConfigAuthenticationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication_type') }})
    context_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context_name') }})
    privacy_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy_password') }})
    privacy_type: Optional[Snmp3ConfigPrivacyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy_type') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
