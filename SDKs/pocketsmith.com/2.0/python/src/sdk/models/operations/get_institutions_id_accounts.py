from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetInstitutionsIDAccountsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstitutionsIDAccountsRequest:
    path_params: GetInstitutionsIDAccountsPathParams = field()
    

@dataclass
class GetInstitutionsIDAccountsResponse:
    content_type: str = field()
    status_code: int = field()
    accounts: Optional[List[shared.Account]] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
