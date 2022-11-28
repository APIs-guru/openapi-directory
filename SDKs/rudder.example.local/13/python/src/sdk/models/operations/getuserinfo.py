from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class GetUserInfo200ApplicationJSONActionEnum(str, Enum):
    GET_USER_INFO = "getUserInfo"

class GetUserInfo200ApplicationJSONDataDigestEnum(str, Enum):
    BCRYPT = "BCRYPT"
    SHA512 = "SHA512"
    SHA256 = "SHA256"
    SHA1 = "SHA1"
    MD5 = "MD5"


@dataclass_json
@dataclass
class GetUserInfo200ApplicationJSONData:
    digest: GetUserInfo200ApplicationJSONDataDigestEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('digest') }})
    users: List[shared.Users] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    
class GetUserInfo200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetUserInfo200ApplicationJSON:
    action: GetUserInfo200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetUserInfo200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetUserInfo200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class GetUserInfoResponse:
    content_type: str = field()
    status_code: int = field()
    get_user_info_200_application_json_object: Optional[GetUserInfo200ApplicationJSON] = field(default=None)
    
