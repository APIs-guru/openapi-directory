from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAccountsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountsIDRequest:
    path_params: GetAccountsIDPathParams = field()
    

@dataclass
class GetAccountsIDResponse:
    content_type: str = field()
    status_code: int = field()
    account: Optional[shared.Account] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
