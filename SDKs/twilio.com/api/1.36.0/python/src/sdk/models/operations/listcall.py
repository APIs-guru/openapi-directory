from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_CALL_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListCallPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListCallQueryParams:
    end_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'EndTime', 'style': 'form', 'explode': True }})
    end_time_less_than_: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'EndTime<', 'style': 'form', 'explode': True }})
    end_time_greater_than_: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'EndTime>', 'style': 'form', 'explode': True }})
    from_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'From', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    parent_call_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ParentCallSid', 'style': 'form', 'explode': True }})
    start_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'StartTime', 'style': 'form', 'explode': True }})
    start_time_less_than_: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'StartTime<', 'style': 'form', 'explode': True }})
    start_time_greater_than_: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'StartTime>', 'style': 'form', 'explode': True }})
    status: Optional[shared.CallEnumStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    to: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'To', 'style': 'form', 'explode': True }})
    

@dataclass
class ListCallSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListCallRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListCallPathParams = field(default=None)
    query_params: ListCallQueryParams = field(default=None)
    security: ListCallSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListCallListCallResponse:
    calls: Optional[List[shared.APIV2010AccountCall]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calls' }})
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_uri' }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_uri' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_uri' }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass
class ListCallResponse:
    content_type: str = field(default=None)
    list_call_response: Optional[ListCallListCallResponse] = field(default=None)
    status_code: int = field(default=None)
    
