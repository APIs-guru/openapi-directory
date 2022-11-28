from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_MODEL_BUILD_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class ListModelBuildPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListModelBuildQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListModelBuildSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListModelBuildListModelBuildResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListModelBuildListModelBuildResponse:
    meta: Optional[ListModelBuildListModelBuildResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    model_builds: Optional[List[shared.AutopilotV1AssistantModelBuild]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model_builds') }})
    

@dataclass
class ListModelBuildRequest:
    path_params: ListModelBuildPathParams = field()
    query_params: ListModelBuildQueryParams = field()
    security: ListModelBuildSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListModelBuildResponse:
    content_type: str = field()
    status_code: int = field()
    list_model_build_response: Optional[ListModelBuildListModelBuildResponse] = field(default=None)
    
