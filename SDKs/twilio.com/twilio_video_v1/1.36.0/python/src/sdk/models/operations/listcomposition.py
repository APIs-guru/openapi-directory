from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_COMPOSITION_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class ListCompositionQueryParams:
    date_created_after: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DateCreatedAfter', 'style': 'form', 'explode': True }})
    date_created_before: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DateCreatedBefore', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    room_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'RoomSid', 'style': 'form', 'explode': True }})
    status: Optional[shared.CompositionEnumStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclass
class ListCompositionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListCompositionRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListCompositionQueryParams = field(default=None)
    security: ListCompositionSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListCompositionListCompositionResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListCompositionListCompositionResponse:
    compositions: Optional[List[shared.VideoV1Composition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compositions' }})
    meta: Optional[ListCompositionListCompositionResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListCompositionResponse:
    content_type: str = field(default=None)
    list_composition_response: Optional[ListCompositionListCompositionResponse] = field(default=None)
    status_code: int = field(default=None)
    
