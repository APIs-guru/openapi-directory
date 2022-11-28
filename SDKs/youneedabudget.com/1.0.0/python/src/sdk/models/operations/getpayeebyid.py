from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPayeeByIDPathParams:
    budget_id: str = field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    payee_id: str = field(metadata={'path_param': { 'field_name': 'payee_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayeeByIDRequest:
    path_params: GetPayeeByIDPathParams = field()
    

@dataclass
class GetPayeeByIDResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    payee_response: Optional[shared.PayeeResponse] = field(default=None)
    
