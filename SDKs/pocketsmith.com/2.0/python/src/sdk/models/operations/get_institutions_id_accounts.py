from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetInstitutionsIDAccountsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstitutionsIDAccountsRequest:
    path_params: GetInstitutionsIDAccountsPathParams = field(default=None)
    

@dataclass
class GetInstitutionsIDAccountsResponse:
    accounts: Optional[List[shared.Account]] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
