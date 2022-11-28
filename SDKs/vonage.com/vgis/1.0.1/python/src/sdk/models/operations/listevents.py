from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class ListEventsDirectionEnum(str, Enum):
    INBOUND = "INBOUND"
    OUTBOUND = "OUTBOUND"

class ListEventsOrderEnum(str, Enum):
    DESC = "DESC"
    ASC = "ASC"

class ListEventsStatesEnum(str, Enum):
    INITIALIZING = "INITIALIZING"
    RINGING = "RINGING"
    ACTIVE = "ACTIVE"
    HELD = "HELD"
    REMOTE_HELD = "REMOTE_HELD"
    DETACHED = "DETACHED"
    REJECTED = "REJECTED"
    CANCELLED = "CANCELLED"
    ANSWERED = "ANSWERED"
    MISSED = "MISSED"

class ListEventsTypesEnum(str, Enum):
    CALL = "CALL"


@dataclass
class ListEventsQueryParams:
    direction: Optional[ListEventsDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    from_date: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'fromDate', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order: Optional[ListEventsOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    states: Optional[ListEventsStatesEnum] = field(default=None, metadata={'query_param': { 'field_name': 'states', 'style': 'form', 'explode': True }})
    to_date: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'toDate', 'style': 'form', 'explode': True }})
    types: Optional[ListEventsTypesEnum] = field(default=None, metadata={'query_param': { 'field_name': 'types', 'style': 'form', 'explode': True }})
    

@dataclass
class ListEventsRequest:
    query_params: ListEventsQueryParams = field()
    

@dataclass
class ListEventsResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    events: Optional[List[shared.Event]] = field(default=None)
    
