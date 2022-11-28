from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUsersIDAccountsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersIDAccountsRequest:
    path_params: GetUsersIDAccountsPathParams = field()
    

@dataclass
class GetUsersIDAccountsResponse:
    content_type: str = field()
    status_code: int = field()
    accounts: Optional[List[shared.Account]] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
