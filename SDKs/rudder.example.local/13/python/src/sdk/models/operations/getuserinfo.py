from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
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
    digest: GetUserInfo200ApplicationJSONDataDigestEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'digest' }})
    users: List[shared.Users] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    
class GetUserInfo200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetUserInfo200ApplicationJSON:
    action: GetUserInfo200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: GetUserInfo200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: GetUserInfo200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class GetUserInfoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_user_info_200_application_json_object: Optional[GetUserInfo200ApplicationJSON] = field(default=None)
    
