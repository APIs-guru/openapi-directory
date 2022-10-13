from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class UserAPIGetCurrentFieldsEnum(str, Enum):
    NONE = "None"
    KNOWN_LANGUAGES = "KnownLanguages"
    MAIN_PICTURE = "MainPicture"
    OLD_USERNAMES = "OldUsernames"


@dataclass
class UserAPIGetCurrentQueryParams:
    fields: Optional[UserAPIGetCurrentFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    

@dataclass
class UserAPIGetCurrentRequest:
    query_params: UserAPIGetCurrentQueryParams = field(default=None)
    

@dataclass
class UserAPIGetCurrentResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user_for_api_contract: Optional[shared.UserForAPIContract] = field(default=None)
    
