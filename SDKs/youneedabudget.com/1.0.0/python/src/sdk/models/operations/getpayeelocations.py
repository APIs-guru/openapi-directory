from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPayeeLocationsPathParams:
    budget_id: str = field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayeeLocationsRequest:
    path_params: GetPayeeLocationsPathParams = field()
    

@dataclass
class GetPayeeLocationsResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    payee_locations_response: Optional[shared.PayeeLocationsResponse] = field(default=None)
    
