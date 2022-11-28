from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostAdminRecordingsStartRequestBodyCaptureHeaders:
    case_insensitive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caseInsensitive') }})
    

@dataclass_json
@dataclass
class PostAdminRecordingsStartRequestBodyExtractBodyCriteria:
    r"""PostAdminRecordingsStartRequestBodyExtractBodyCriteria
    Criteria for extracting response bodies to a separate file instead of including it in the stub mapping
    """
    
    binary_size_threshold: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('binarySizeThreshold') }})
    text_size_threshold: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textSizeThreshold') }})
    

@dataclass_json
@dataclass
class PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials:
    r"""PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials
    Pre-emptive basic auth credentials to match against
    """
    
    password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclass
class PostAdminRecordingsStartRequestBodyFilters:
    basic_auth_credentials: Optional[PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicAuthCredentials') }})
    body_patterns: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bodyPatterns') }})
    cookies: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookies') }})
    headers: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    query_parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryParameters') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    url_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlPath') }})
    url_path_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlPathPattern') }})
    url_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlPattern') }})
    

@dataclass_json
@dataclass
class PostAdminRecordingsStartRequestBody:
    capture_headers: Optional[dict[str, PostAdminRecordingsStartRequestBodyCaptureHeaders]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('captureHeaders') }})
    extract_body_criteria: Optional[PostAdminRecordingsStartRequestBodyExtractBodyCriteria] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extractBodyCriteria') }})
    filters: Optional[PostAdminRecordingsStartRequestBodyFilters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    persist: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('persist') }})
    repeats_as_scenarios: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repeatsAsScenarios') }})
    request_body_pattern: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestBodyPattern') }})
    target_base_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetBaseUrl') }})
    transformer_parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transformerParameters') }})
    transformers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transformers') }})
    

@dataclass
class PostAdminRecordingsStartRequest:
    request: PostAdminRecordingsStartRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAdminRecordingsStartResponse:
    content_type: str = field()
    status_code: int = field()
    
