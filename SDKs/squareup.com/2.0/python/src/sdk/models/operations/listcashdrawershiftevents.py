from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListCashDrawerShiftEventsPathParams:
    shift_id: str = field(default=None, metadata={'path_param': { 'field_name': 'shift_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListCashDrawerShiftEventsQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    location_id: str = field(default=None, metadata={'query_param': { 'field_name': 'location_id', 'style': 'form', 'explode': True }})
    

@dataclass
class ListCashDrawerShiftEventsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ListCashDrawerShiftEventsRequest:
    path_params: ListCashDrawerShiftEventsPathParams = field(default=None)
    query_params: ListCashDrawerShiftEventsQueryParams = field(default=None)
    security: ListCashDrawerShiftEventsSecurity = field(default=None)
    

@dataclass
class ListCashDrawerShiftEventsResponse:
    content_type: str = field(default=None)
    list_cash_drawer_shift_events_response: Optional[shared.ListCashDrawerShiftEventsResponse] = field(default=None)
    status_code: int = field(default=None)
    
