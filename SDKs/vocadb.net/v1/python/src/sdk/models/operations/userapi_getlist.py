from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared

class UserAPIGetListFieldsEnum(str, Enum):
    NONE = "None"
    KNOWN_LANGUAGES = "KnownLanguages"
    MAIN_PICTURE = "MainPicture"
    OLD_USERNAMES = "OldUsernames"

class UserAPIGetListGroupsEnum(str, Enum):
    NOTHING = "Nothing"
    LIMITED = "Limited"
    REGULAR = "Regular"
    TRUSTED = "Trusted"
    MODERATOR = "Moderator"
    ADMIN = "Admin"

class UserAPIGetListNameMatchModeEnum(str, Enum):
    AUTO = "Auto"
    PARTIAL = "Partial"
    STARTS_WITH = "StartsWith"
    EXACT = "Exact"
    WORDS = "Words"

class UserAPIGetListSortEnum(str, Enum):
    REGISTER_DATE = "RegisterDate"
    NAME = "Name"
    GROUP = "Group"


@dataclass
class UserAPIGetListQueryParams:
    fields: Optional[UserAPIGetListFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    get_total_count: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'getTotalCount', 'style': 'form', 'explode': True }})
    groups: Optional[UserAPIGetListGroupsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'groups', 'style': 'form', 'explode': True }})
    include_disabled: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeDisabled', 'style': 'form', 'explode': True }})
    join_date_after: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'joinDateAfter', 'style': 'form', 'explode': True }})
    join_date_before: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'joinDateBefore', 'style': 'form', 'explode': True }})
    knows_language: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'knowsLanguage', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    name_match_mode: Optional[UserAPIGetListNameMatchModeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'nameMatchMode', 'style': 'form', 'explode': True }})
    only_verified: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'onlyVerified', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[UserAPIGetListSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class UserAPIGetListRequest:
    query_params: UserAPIGetListQueryParams = field()
    

@dataclass
class UserAPIGetListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    partial_find_result_user_for_api_contract_: Optional[shared.PartialFindResultUserForAPIContract] = field(default=None)
    
