from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class UserAPIGetOnePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class UserAPIGetOneFieldsEnum(str, Enum):
    NONE = "None"
    KNOWN_LANGUAGES = "KnownLanguages"
    MAIN_PICTURE = "MainPicture"
    OLD_USERNAMES = "OldUsernames"


@dataclass
class UserAPIGetOneQueryParams:
    fields: Optional[UserAPIGetOneFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    

@dataclass
class UserAPIGetOneRequest:
    path_params: UserAPIGetOnePathParams = field(default=None)
    query_params: UserAPIGetOneQueryParams = field(default=None)
    

@dataclass
class UserAPIGetOneResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user_for_api_contract: Optional[shared.UserForAPIContract] = field(default=None)
    
