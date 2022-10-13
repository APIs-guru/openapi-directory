from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class GetCallsCountDirectionEnum(str, Enum):
    INBOUND = "INBOUND"
    OUTBOUND = "OUTBOUND"

class GetCallsCountStatesEnum(str, Enum):
    INITIALIZING = "INITIALIZING"
    RINGING = "RINGING"
    ACTIVE = "ACTIVE"
    HELD = "HELD"
    REMOTE_HELD = "REMOTE_HELD"


@dataclass
class GetCallsCountQueryParams:
    direction: Optional[GetCallsCountDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    from_date: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'fromDate', 'style': 'form', 'explode': True }})
    states: Optional[GetCallsCountStatesEnum] = field(default=None, metadata={'query_param': { 'field_name': 'states', 'style': 'form', 'explode': True }})
    to_date: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'toDate', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCallsCountRequest:
    query_params: GetCallsCountQueryParams = field(default=None)
    

@dataclass
class GetCallsCountResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    events_count: Optional[shared.EventsCount] = field(default=None)
    status_code: int = field(default=None)
    
