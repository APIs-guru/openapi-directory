from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAccountByIDPathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    budget_id: str = field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountByIDRequest:
    path_params: GetAccountByIDPathParams = field()
    

@dataclass
class GetAccountByIDResponse:
    content_type: str = field()
    status_code: int = field()
    account_response: Optional[shared.AccountResponse] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
