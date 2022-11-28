from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared

class GetEventsCountDirectionEnum(str, Enum):
    INBOUND = "INBOUND"
    OUTBOUND = "OUTBOUND"

class GetEventsCountStatesEnum(str, Enum):
    INITIALIZING = "INITIALIZING"
    RINGING = "RINGING"
    ACTIVE = "ACTIVE"
    HELD = "HELD"
    REMOTE_HELD = "REMOTE_HELD"


@dataclass
class GetEventsCountQueryParams:
    direction: Optional[GetEventsCountDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    from_date: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'fromDate', 'style': 'form', 'explode': True }})
    states: Optional[GetEventsCountStatesEnum] = field(default=None, metadata={'query_param': { 'field_name': 'states', 'style': 'form', 'explode': True }})
    to_date: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'toDate', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEventsCountRequest:
    query_params: GetEventsCountQueryParams = field()
    

@dataclass
class GetEventsCountResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    events_count: Optional[shared.EventsCount] = field(default=None)
    
