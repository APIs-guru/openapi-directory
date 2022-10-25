from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_FAX_MEDIA_SERVERS = [
	"https://fax.twilio.com",
]


@dataclass
class ListFaxMediaPathParams:
    fax_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FaxSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListFaxMediaQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListFaxMediaSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListFaxMediaRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListFaxMediaPathParams = field(default=None)
    query_params: ListFaxMediaQueryParams = field(default=None)
    security: ListFaxMediaSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListFaxMediaListFaxMediaResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListFaxMediaListFaxMediaResponse:
    media: Optional[List[shared.FaxV1FaxFaxMedia]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'media' }})
    meta: Optional[ListFaxMediaListFaxMediaResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListFaxMediaResponse:
    content_type: str = field(default=None)
    list_fax_media_response: Optional[ListFaxMediaListFaxMediaResponse] = field(default=None)
    status_code: int = field(default=None)
    
