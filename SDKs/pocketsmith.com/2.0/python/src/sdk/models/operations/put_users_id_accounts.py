from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutUsersIDAccountsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutUsersIDAccountsRequestBody:
    accounts: List[shared.Account] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts') }})
    

@dataclass
class PutUsersIDAccountsRequest:
    path_params: PutUsersIDAccountsPathParams = field()
    request: Optional[PutUsersIDAccountsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutUsersIDAccountsResponse:
    content_type: str = field()
    status_code: int = field()
    accounts: Optional[List[shared.Account]] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
