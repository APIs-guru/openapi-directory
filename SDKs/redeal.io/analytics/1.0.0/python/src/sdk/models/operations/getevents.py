from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class GetEventsTypeEnum(str, Enum):
    ALL = "all"
    CLICKS = "clicks"
    CONTACTS = "contacts"


@dataclass
class GetEventsQueryParams:
    company: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'company', 'style': 'form', 'explode': True }})
    deal: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'deal', 'style': 'form', 'explode': True }})
    nexttoken: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nexttoken', 'style': 'form', 'explode': True }})
    queryexecutionid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'queryexecutionid', 'style': 'form', 'explode': True }})
    site: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    type: Optional[GetEventsTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEventsRequest:
    query_params: GetEventsQueryParams = field(default=None)
    

@dataclass
class GetEventsResponse:
    content_type: str = field(default=None)
    event_records: Optional[List[shared.EventRecord]] = field(default=None)
    status_code: int = field(default=None)
    
