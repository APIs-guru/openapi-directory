from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_UNDERSTAND_SAMPLE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListUnderstandSamplePathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    task_sid: str = field(metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListUnderstandSampleQueryParams:
    language: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Language', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListUnderstandSampleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListUnderstandSampleListUnderstandSampleResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListUnderstandSampleListUnderstandSampleResponse:
    meta: Optional[ListUnderstandSampleListUnderstandSampleResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    samples: Optional[List[shared.PreviewUnderstandAssistantTaskSample]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('samples') }})
    

@dataclass
class ListUnderstandSampleRequest:
    path_params: ListUnderstandSamplePathParams = field()
    query_params: ListUnderstandSampleQueryParams = field()
    security: ListUnderstandSampleSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListUnderstandSampleResponse:
    content_type: str = field()
    status_code: int = field()
    list_understand_sample_response: Optional[ListUnderstandSampleListUnderstandSampleResponse] = field(default=None)
    
