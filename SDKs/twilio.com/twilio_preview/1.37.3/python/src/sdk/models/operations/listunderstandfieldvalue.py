from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_UNDERSTAND_FIELD_VALUE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListUnderstandFieldValuePathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    field_type_sid: str = field(metadata={'path_param': { 'field_name': 'FieldTypeSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListUnderstandFieldValueQueryParams:
    language: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Language', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListUnderstandFieldValueSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListUnderstandFieldValueListUnderstandFieldValueResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListUnderstandFieldValueListUnderstandFieldValueResponse:
    field_values: Optional[List[shared.PreviewUnderstandAssistantFieldTypeFieldValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field_values') }})
    meta: Optional[ListUnderstandFieldValueListUnderstandFieldValueResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListUnderstandFieldValueRequest:
    path_params: ListUnderstandFieldValuePathParams = field()
    query_params: ListUnderstandFieldValueQueryParams = field()
    security: ListUnderstandFieldValueSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListUnderstandFieldValueResponse:
    content_type: str = field()
    status_code: int = field()
    list_understand_field_value_response: Optional[ListUnderstandFieldValueListUnderstandFieldValueResponse] = field(default=None)
    
