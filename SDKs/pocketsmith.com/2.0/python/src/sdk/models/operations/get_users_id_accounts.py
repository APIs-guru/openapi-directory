from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUsersIDAccountsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersIDAccountsRequest:
    path_params: GetUsersIDAccountsPathParams = field(default=None)
    

@dataclass
class GetUsersIDAccountsResponse:
    accounts: Optional[List[shared.Account]] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
