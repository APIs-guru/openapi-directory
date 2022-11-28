from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class StopsStopDetailsPathParams:
    route_type: int = field(metadata={'path_param': { 'field_name': 'route_type', 'style': 'simple', 'explode': False }})
    stop_id: int = field(metadata={'path_param': { 'field_name': 'stop_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopsStopDetailsQueryParams:
    devid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    gtfs: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'gtfs', 'style': 'form', 'explode': True }})
    signature: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    stop_accessibility: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'stop_accessibility', 'style': 'form', 'explode': True }})
    stop_amenities: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'stop_amenities', 'style': 'form', 'explode': True }})
    stop_contact: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'stop_contact', 'style': 'form', 'explode': True }})
    stop_disruptions: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'stop_disruptions', 'style': 'form', 'explode': True }})
    stop_location: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'stop_location', 'style': 'form', 'explode': True }})
    stop_staffing: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'stop_staffing', 'style': 'form', 'explode': True }})
    stop_ticket: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'stop_ticket', 'style': 'form', 'explode': True }})
    token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class StopsStopDetailsRequest:
    path_params: StopsStopDetailsPathParams = field()
    query_params: StopsStopDetailsQueryParams = field()
    

@dataclass
class StopsStopDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    v3_error_response: Optional[shared.V3ErrorResponse] = field(default=None)
    v3_stop_response: Optional[shared.V3StopResponse] = field(default=None)
    
