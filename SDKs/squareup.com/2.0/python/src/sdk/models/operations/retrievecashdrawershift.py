from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveCashDrawerShiftPathParams:
    shift_id: str = field(default=None, metadata={'path_param': { 'field_name': 'shift_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveCashDrawerShiftQueryParams:
    location_id: str = field(default=None, metadata={'query_param': { 'field_name': 'location_id', 'style': 'form', 'explode': True }})
    

@dataclass
class RetrieveCashDrawerShiftSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RetrieveCashDrawerShiftRequest:
    path_params: RetrieveCashDrawerShiftPathParams = field(default=None)
    query_params: RetrieveCashDrawerShiftQueryParams = field(default=None)
    security: RetrieveCashDrawerShiftSecurity = field(default=None)
    

@dataclass
class RetrieveCashDrawerShiftResponse:
    content_type: str = field(default=None)
    retrieve_cash_drawer_shift_response: Optional[shared.RetrieveCashDrawerShiftResponse] = field(default=None)
    status_code: int = field(default=None)
    
