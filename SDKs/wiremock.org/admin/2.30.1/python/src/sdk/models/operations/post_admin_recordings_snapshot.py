from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostAdminRecordingsSnapshotRequestBodyCaptureHeaders:
    case_insensitive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caseInsensitive' }})
    

@dataclass_json
@dataclass
class PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria:
    binary_size_threshold: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'binarySizeThreshold' }})
    text_size_threshold: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textSizeThreshold' }})
    

@dataclass_json
@dataclass
class PostAdminRecordingsSnapshotRequestBodyFiltersBasicAuthCredentials:
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    

@dataclass_json
@dataclass
class PostAdminRecordingsSnapshotRequestBodyFilters:
    basic_auth_credentials: Optional[PostAdminRecordingsSnapshotRequestBodyFiltersBasicAuthCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basicAuthCredentials' }})
    body_patterns: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bodyPatterns' }})
    cookies: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookies' }})
    headers: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids' }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    query_parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryParameters' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    url_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlPath' }})
    url_path_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlPathPattern' }})
    url_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlPattern' }})
    

@dataclass_json
@dataclass
class PostAdminRecordingsSnapshotRequestBody:
    capture_headers: Optional[dict[str, PostAdminRecordingsSnapshotRequestBodyCaptureHeaders]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'captureHeaders' }})
    extract_body_criteria: Optional[PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extractBodyCriteria' }})
    filters: Optional[PostAdminRecordingsSnapshotRequestBodyFilters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    persist: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'persist' }})
    repeats_as_scenarios: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repeatsAsScenarios' }})
    request_body_pattern: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestBodyPattern' }})
    transformer_parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transformerParameters' }})
    transformers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transformers' }})
    

@dataclass
class PostAdminRecordingsSnapshotRequest:
    request: PostAdminRecordingsSnapshotRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostAdminRecordingsSnapshot200ApplicationJSONMappingsRequestBasicAuthCredentials:
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    

@dataclass_json
@dataclass
class PostAdminRecordingsSnapshot200ApplicationJSONMappingsRequest:
    basic_auth_credentials: Optional[PostAdminRecordingsSnapshot200ApplicationJSONMappingsRequestBasicAuthCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basicAuthCredentials' }})
    body_patterns: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bodyPatterns' }})
    cookies: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookies' }})
    headers: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    query_parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryParameters' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    url_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlPath' }})
    url_path_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlPathPattern' }})
    url_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlPattern' }})
    
class PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponseFaultEnum(str, Enum):
    CONNECTION_RESET_BY_PEER = "CONNECTION_RESET_BY_PEER"
    EMPTY_RESPONSE = "EMPTY_RESPONSE"
    MALFORMED_RESPONSE_CHUNK = "MALFORMED_RESPONSE_CHUNK"
    RANDOM_DATA_THEN_CLOSE = "RANDOM_DATA_THEN_CLOSE"


@dataclass_json
@dataclass
class PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponse:
    additional_proxy_request_headers: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalProxyRequestHeaders' }})
    base64_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'base64Body' }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    body_file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bodyFileName' }})
    fault: Optional[PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponseFaultEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fault' }})
    fixed_delay_milliseconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixedDelayMilliseconds' }})
    from_configured_stub: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromConfiguredStub' }})
    headers: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    json_body: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jsonBody' }})
    proxy_base_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proxyBaseUrl' }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusMessage' }})
    transformer_parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transformerParameters' }})
    transformers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transformers' }})
    

@dataclass_json
@dataclass
class PostAdminRecordingsSnapshot200ApplicationJSONMappings:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    new_scenario_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newScenarioState' }})
    persistent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'persistent' }})
    post_serve_actions: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postServeActions' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    request: Optional[PostAdminRecordingsSnapshot200ApplicationJSONMappingsRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request' }})
    required_scenario_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requiredScenarioState' }})
    response: Optional[PostAdminRecordingsSnapshot200ApplicationJSONMappingsResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    scenario_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scenarioName' }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uuid' }})
    

@dataclass_json
@dataclass
class PostAdminRecordingsSnapshot200ApplicationJSONMeta:
    total: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class PostAdminRecordingsSnapshot200ApplicationJSON:
    mappings: Optional[List[PostAdminRecordingsSnapshot200ApplicationJSONMappings]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mappings' }})
    meta: Optional[PostAdminRecordingsSnapshot200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class PostAdminRecordingsSnapshotResponse:
    content_type: str = field(default=None)
    post_admin_recordings_snapshot_200_application_json_object: Optional[PostAdminRecordingsSnapshot200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
