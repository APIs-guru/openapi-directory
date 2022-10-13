from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPayeeByIDPathParams:
    budget_id: str = field(default=None, metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    payee_id: str = field(default=None, metadata={'path_param': { 'field_name': 'payee_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayeeByIDRequest:
    path_params: GetPayeeByIDPathParams = field(default=None)
    

@dataclass
class GetPayeeByIDResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    payee_response: Optional[shared.PayeeResponse] = field(default=None)
    status_code: int = field(default=None)
    
