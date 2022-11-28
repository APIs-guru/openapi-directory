from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostAdminMappingsFindByMetadataRequestBodyStringEquals:
    equal_to: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('equalTo') }})
    case_insensitive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caseInsensitive') }})
    

@dataclass_json
@dataclass
class PostAdminMappingsFindByMetadataRequestBodyStringContains:
    contains: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contains') }})
    

@dataclass_json
@dataclass
class PostAdminMappingsFindByMetadataRequestBodyRegularExpressionMatch:
    matches: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('matches') }})
    

@dataclass_json
@dataclass
class PostAdminMappingsFindByMetadataRequestBodyNegativeRegularExpressionMatch:
    does_not_match: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('doesNotMatch') }})
    

@dataclass_json
@dataclass
class PostAdminMappingsFindByMetadataRequestBodyJSONEquals:
    equal_to_json: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('equalToJson') }})
    

@dataclass_json
@dataclass
class PostAdminMappingsFindByMetadataRequestBodyJSONPathMatch:
    matches_json_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchesJsonPath') }})
    ignore_array_order: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreArrayOrder') }})
    ignore_extra_elements: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreExtraElements') }})
    

@dataclass_json
@dataclass
class PostAdminMappingsFindByMetadataRequestBodyXMLEquality:
    equal_to_xml: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('equalToXml') }})
    

@dataclass_json
@dataclass
class PostAdminMappingsFindByMetadataRequestBodyXPathMatch:
    matches_xpath: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchesXpath') }})
    namespaces: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaces') }})
    value_pattern: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valuePattern') }})
    

@dataclass_json
@dataclass
class PostAdminMappingsFindByMetadata200ApplicationJSONMappingsRequestBasicAuthCredentials:
    r"""PostAdminMappingsFindByMetadata200ApplicationJSONMappingsRequestBasicAuthCredentials
    Pre-emptive basic auth credentials to match against
    """
    
    password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclass
class PostAdminMappingsFindByMetadata200ApplicationJSONMappingsRequest:
    basic_auth_credentials: Optional[PostAdminMappingsFindByMetadata200ApplicationJSONMappingsRequestBasicAuthCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicAuthCredentials') }})
    body_patterns: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bodyPatterns') }})
    cookies: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookies') }})
    headers: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    query_parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryParameters') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    url_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlPath') }})
    url_path_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlPathPattern') }})
    url_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlPattern') }})
    
class PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponseFaultEnum(str, Enum):
    CONNECTION_RESET_BY_PEER = "CONNECTION_RESET_BY_PEER"
    EMPTY_RESPONSE = "EMPTY_RESPONSE"
    MALFORMED_RESPONSE_CHUNK = "MALFORMED_RESPONSE_CHUNK"
    RANDOM_DATA_THEN_CLOSE = "RANDOM_DATA_THEN_CLOSE"


@dataclass_json
@dataclass
class PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponse:
    additional_proxy_request_headers: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalProxyRequestHeaders') }})
    base64_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('base64Body') }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    body_file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bodyFileName') }})
    fault: Optional[PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponseFaultEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fault') }})
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
class PostAdminMappingsFindByMetadata200ApplicationJSONMappings:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    new_scenario_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newScenarioState') }})
    persistent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('persistent') }})
    post_serve_actions: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postServeActions') }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    request: Optional[PostAdminMappingsFindByMetadata200ApplicationJSONMappingsRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request') }})
    required_scenario_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requiredScenarioState') }})
    response: Optional[PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    scenario_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scenarioName') }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    

@dataclass_json
@dataclass
class PostAdminMappingsFindByMetadata200ApplicationJSONMeta:
    total: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclass
class PostAdminMappingsFindByMetadata200ApplicationJSON:
    mappings: Optional[List[PostAdminMappingsFindByMetadata200ApplicationJSONMappings]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mappings') }})
    meta: Optional[PostAdminMappingsFindByMetadata200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class PostAdminMappingsFindByMetadataRequest:
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAdminMappingsFindByMetadataResponse:
    content_type: str = field()
    status_code: int = field()
    post_admin_mappings_find_by_metadata_200_application_json_object: Optional[PostAdminMappingsFindByMetadata200ApplicationJSON] = field(default=None)
    
