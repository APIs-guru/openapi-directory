from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPayeeLocationByIDPathParams:
    budget_id: str = field(default=None, metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    payee_location_id: str = field(default=None, metadata={'path_param': { 'field_name': 'payee_location_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayeeLocationByIDRequest:
    path_params: GetPayeeLocationByIDPathParams = field(default=None)
    

@dataclass
class GetPayeeLocationByIDResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    payee_location_response: Optional[shared.PayeeLocationResponse] = field(default=None)
    status_code: int = field(default=None)
    
