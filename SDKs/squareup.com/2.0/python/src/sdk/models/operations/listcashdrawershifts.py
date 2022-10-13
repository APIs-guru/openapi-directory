from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListCashDrawerShiftsQueryParams:
    begin_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'begin_time', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    end_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'end_time', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    location_id: str = field(default=None, metadata={'query_param': { 'field_name': 'location_id', 'style': 'form', 'explode': True }})
    sort_order: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort_order', 'style': 'form', 'explode': True }})
    

@dataclass
class ListCashDrawerShiftsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ListCashDrawerShiftsRequest:
    query_params: ListCashDrawerShiftsQueryParams = field(default=None)
    security: ListCashDrawerShiftsSecurity = field(default=None)
    

@dataclass
class ListCashDrawerShiftsResponse:
    content_type: str = field(default=None)
    list_cash_drawer_shifts_response: Optional[shared.ListCashDrawerShiftsResponse] = field(default=None)
    status_code: int = field(default=None)
    
