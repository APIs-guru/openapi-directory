from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAccountsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountsIDRequest:
    path_params: GetAccountsIDPathParams = field()
    

@dataclass
class GetAccountsIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_account_response: Optional[shared.GetAccountResponse] = field(default=None)
    
