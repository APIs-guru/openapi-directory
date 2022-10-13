from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostUsersIDAccountsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class PostUsersIDAccountsRequestBodyTypeEnum(str, Enum):
    BANK = "bank"
    CREDITS = "credits"
    LOANS = "loans"
    MORTGAGE = "mortgage"
    STOCKS = "stocks"
    VEHICLE = "vehicle"
    PROPERTY = "property"
    OTHER_ASSET = "other_asset"
    OTHER_LIABILITY = "other_liability"


@dataclass_json
@dataclass
class PostUsersIDAccountsRequestBody:
    currency_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency_code' }})
    institution_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'institution_id' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: PostUsersIDAccountsRequestBodyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class PostUsersIDAccountsRequest:
    path_params: PostUsersIDAccountsPathParams = field(default=None)
    request: Optional[PostUsersIDAccountsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostUsersIDAccountsResponse:
    account: Optional[shared.Account] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
