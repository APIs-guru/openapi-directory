from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutUsersIDAccountsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutUsersIDAccountsRequestBody:
    accounts: List[shared.Account] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accounts' }})
    

@dataclass
class PutUsersIDAccountsRequest:
    path_params: PutUsersIDAccountsPathParams = field(default=None)
    request: Optional[PutUsersIDAccountsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutUsersIDAccountsResponse:
    accounts: Optional[List[shared.Account]] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
