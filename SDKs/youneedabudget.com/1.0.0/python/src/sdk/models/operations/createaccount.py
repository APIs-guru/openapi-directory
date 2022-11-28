from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateAccountPathParams:
    budget_id: str = field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAccountRequest:
    path_params: CreateAccountPathParams = field()
    request: shared.SaveAccountWrapper = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAccountResponse:
    content_type: str = field()
    status_code: int = field()
    account_response: Optional[shared.AccountResponse] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
