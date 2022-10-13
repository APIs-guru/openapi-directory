from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCalendarsQueryParams:
    all: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'all', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCalendarsRequest:
    query_params: GetCalendarsQueryParams = field(default=None)
    

@dataclass
class GetCalendarsResponse:
    calendars: Optional[List[shared.Calendar]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
