from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetAdminMappingsStubMappingIDPathParams:
    stub_mapping_id: str = field(default=None, metadata={'path_param': { 'field_name': 'stubMappingId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAdminMappingsStubMappingIDRequest:
    path_params: GetAdminMappingsStubMappingIDPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetAdminMappingsStubMappingID200ApplicationJSONRequestBasicAuthCredentials:
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    

@dataclass_json
@dataclass
class GetAdminMappingsStubMappingID200ApplicationJSONRequest:
    basic_auth_credentials: Optional[GetAdminMappingsStubMappingID200ApplicationJSONRequestBasicAuthCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basicAuthCredentials' }})
    body_patterns: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bodyPatterns' }})
    cookies: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookies' }})
    headers: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    query_parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryParameters' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    url_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlPath' }})
    url_path_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlPathPattern' }})
    url_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlPattern' }})
    
class GetAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnum(str, Enum):
    CONNECTION_RESET_BY_PEER = "CONNECTION_RESET_BY_PEER"
    EMPTY_RESPONSE = "EMPTY_RESPONSE"
    MALFORMED_RESPONSE_CHUNK = "MALFORMED_RESPONSE_CHUNK"
    RANDOM_DATA_THEN_CLOSE = "RANDOM_DATA_THEN_CLOSE"


@dataclass_json
@dataclass
class GetAdminMappingsStubMappingID200ApplicationJSONResponse:
    additional_proxy_request_headers: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalProxyRequestHeaders' }})
    base64_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'base64Body' }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    body_file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bodyFileName' }})
    fault: Optional[GetAdminMappingsStubMappingID200ApplicationJSONResponseFaultEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fault' }})
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
class GetAdminMappingsStubMappingID200ApplicationJSON:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    new_scenario_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newScenarioState' }})
    persistent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'persistent' }})
    post_serve_actions: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postServeActions' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    request: Optional[GetAdminMappingsStubMappingID200ApplicationJSONRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request' }})
    required_scenario_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requiredScenarioState' }})
    response: Optional[GetAdminMappingsStubMappingID200ApplicationJSONResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    scenario_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scenarioName' }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uuid' }})
    

@dataclass
class GetAdminMappingsStubMappingIDResponse:
    content_type: str = field(default=None)
    get_admin_mappings_stub_mapping_id_200_application_json_object: Optional[GetAdminMappingsStubMappingID200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
