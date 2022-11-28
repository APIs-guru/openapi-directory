from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class UserAPIGetOnePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
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
    path_params: UserAPIGetOnePathParams = field()
    query_params: UserAPIGetOneQueryParams = field()
    

@dataclass
class UserAPIGetOneResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    user_for_api_contract: Optional[shared.UserForAPIContract] = field(default=None)
    
