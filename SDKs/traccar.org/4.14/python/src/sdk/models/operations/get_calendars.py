from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCalendarsQueryParams:
    all: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'all', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCalendarsRequest:
    query_params: GetCalendarsQueryParams = field()
    

@dataclass
class GetCalendarsResponse:
    content_type: str = field()
    status_code: int = field()
    calendars: Optional[List[shared.Calendar]] = field(default=None)
    
