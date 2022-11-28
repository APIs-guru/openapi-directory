from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_UNDERSTAND_FIELD_TYPE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListUnderstandFieldTypePathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListUnderstandFieldTypeQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListUnderstandFieldTypeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListUnderstandFieldTypeListUnderstandFieldTypeResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListUnderstandFieldTypeListUnderstandFieldTypeResponse:
    field_types: Optional[List[shared.PreviewUnderstandAssistantFieldType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field_types') }})
    meta: Optional[ListUnderstandFieldTypeListUnderstandFieldTypeResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListUnderstandFieldTypeRequest:
    path_params: ListUnderstandFieldTypePathParams = field()
    query_params: ListUnderstandFieldTypeQueryParams = field()
    security: ListUnderstandFieldTypeSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListUnderstandFieldTypeResponse:
    content_type: str = field()
    status_code: int = field()
    list_understand_field_type_response: Optional[ListUnderstandFieldTypeListUnderstandFieldTypeResponse] = field(default=None)
    
