from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetAdminMappingsQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAdminMappingsRequest:
    query_params: GetAdminMappingsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetAdminMappings200ApplicationJSONMappingsRequestBasicAuthCredentials:
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    

@dataclass_json
@dataclass
class GetAdminMappings200ApplicationJSONMappingsRequest:
    basic_auth_credentials: Optional[GetAdminMappings200ApplicationJSONMappingsRequestBasicAuthCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basicAuthCredentials' }})
    body_patterns: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bodyPatterns' }})
    cookies: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookies' }})
    headers: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    query_parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryParameters' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    url_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlPath' }})
    url_path_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlPathPattern' }})
    url_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlPattern' }})
    
class GetAdminMappings200ApplicationJSONMappingsResponseFaultEnum(str, Enum):
    CONNECTION_RESET_BY_PEER = "CONNECTION_RESET_BY_PEER"
    EMPTY_RESPONSE = "EMPTY_RESPONSE"
    MALFORMED_RESPONSE_CHUNK = "MALFORMED_RESPONSE_CHUNK"
    RANDOM_DATA_THEN_CLOSE = "RANDOM_DATA_THEN_CLOSE"


@dataclass_json
@dataclass
class GetAdminMappings200ApplicationJSONMappingsResponse:
    additional_proxy_request_headers: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalProxyRequestHeaders' }})
    base64_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'base64Body' }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    body_file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bodyFileName' }})
    fault: Optional[GetAdminMappings200ApplicationJSONMappingsResponseFaultEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fault' }})
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
class GetAdminMappings200ApplicationJSONMappings:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    new_scenario_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newScenarioState' }})
    persistent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'persistent' }})
    post_serve_actions: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postServeActions' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    request: Optional[GetAdminMappings200ApplicationJSONMappingsRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request' }})
    required_scenario_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requiredScenarioState' }})
    response: Optional[GetAdminMappings200ApplicationJSONMappingsResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    scenario_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scenarioName' }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uuid' }})
    

@dataclass_json
@dataclass
class GetAdminMappings200ApplicationJSONMeta:
    total: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class GetAdminMappings200ApplicationJSON:
    mappings: Optional[List[GetAdminMappings200ApplicationJSONMappings]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mappings' }})
    meta: Optional[GetAdminMappings200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class GetAdminMappingsResponse:
    content_type: str = field(default=None)
    get_admin_mappings_200_application_json_object: Optional[GetAdminMappings200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
