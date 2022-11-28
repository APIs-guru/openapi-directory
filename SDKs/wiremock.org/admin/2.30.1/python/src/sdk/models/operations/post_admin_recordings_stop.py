from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostAdminRecordingsStop200ApplicationJSONMappingsRequestBasicAuthCredentials:
    r"""PostAdminRecordingsStop200ApplicationJSONMappingsRequestBasicAuthCredentials
    Pre-emptive basic auth credentials to match against
    """
    
    password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclass
class PostAdminRecordingsStop200ApplicationJSONMappingsRequest:
    basic_auth_credentials: Optional[PostAdminRecordingsStop200ApplicationJSONMappingsRequestBasicAuthCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicAuthCredentials') }})
    body_patterns: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bodyPatterns') }})
    cookies: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookies') }})
    headers: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    query_parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryParameters') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    url_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlPath') }})
    url_path_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlPathPattern') }})
    url_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlPattern') }})
    
class PostAdminRecordingsStop200ApplicationJSONMappingsResponseFaultEnum(str, Enum):
    CONNECTION_RESET_BY_PEER = "CONNECTION_RESET_BY_PEER"
    EMPTY_RESPONSE = "EMPTY_RESPONSE"
    MALFORMED_RESPONSE_CHUNK = "MALFORMED_RESPONSE_CHUNK"
    RANDOM_DATA_THEN_CLOSE = "RANDOM_DATA_THEN_CLOSE"


@dataclass_json
@dataclass
class PostAdminRecordingsStop200ApplicationJSONMappingsResponse:
    additional_proxy_request_headers: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalProxyRequestHeaders') }})
    base64_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('base64Body') }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    body_file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bodyFileName') }})
    fault: Optional[PostAdminRecordingsStop200ApplicationJSONMappingsResponseFaultEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fault') }})
    fixed_delay_milliseconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedDelayMilliseconds') }})
    from_configured_stub: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromConfiguredStub') }})
    headers: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    json_body: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsonBody') }})
    proxy_base_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxyBaseUrl') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusMessage') }})
    transformer_parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transformerParameters') }})
    transformers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transformers') }})
    

@dataclass_json
@dataclass
class PostAdminRecordingsStop200ApplicationJSONMappings:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    new_scenario_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newScenarioState') }})
    persistent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('persistent') }})
    post_serve_actions: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postServeActions') }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    request: Optional[PostAdminRecordingsStop200ApplicationJSONMappingsRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request') }})
    required_scenario_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requiredScenarioState') }})
    response: Optional[PostAdminRecordingsStop200ApplicationJSONMappingsResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    scenario_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scenarioName') }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    

@dataclass_json
@dataclass
class PostAdminRecordingsStop200ApplicationJSONMeta:
    total: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclass
class PostAdminRecordingsStop200ApplicationJSON:
    mappings: Optional[List[PostAdminRecordingsStop200ApplicationJSONMappings]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mappings') }})
    meta: Optional[PostAdminRecordingsStop200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class PostAdminRecordingsStopResponse:
    content_type: str = field()
    status_code: int = field()
    post_admin_recordings_stop_200_application_json_object: Optional[PostAdminRecordingsStop200ApplicationJSON] = field(default=None)
    
