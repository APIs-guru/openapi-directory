from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_UNDERSTAND_MODEL_BUILD_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListUnderstandModelBuildPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListUnderstandModelBuildQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListUnderstandModelBuildSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListUnderstandModelBuildRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListUnderstandModelBuildPathParams = field(default=None)
    query_params: ListUnderstandModelBuildQueryParams = field(default=None)
    security: ListUnderstandModelBuildSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListUnderstandModelBuildListUnderstandModelBuildResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListUnderstandModelBuildListUnderstandModelBuildResponse:
    meta: Optional[ListUnderstandModelBuildListUnderstandModelBuildResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    model_builds: Optional[List[shared.PreviewUnderstandAssistantModelBuild]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model_builds' }})
    

@dataclass
class ListUnderstandModelBuildResponse:
    content_type: str = field(default=None)
    list_understand_model_build_response: Optional[ListUnderstandModelBuildListUnderstandModelBuildResponse] = field(default=None)
    status_code: int = field(default=None)
    
