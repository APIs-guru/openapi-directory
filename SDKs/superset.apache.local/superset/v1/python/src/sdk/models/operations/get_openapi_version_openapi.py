from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetOpenapiVersionOpenapiPathParams:
    version: str = field(default=None, metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOpenapiVersionOpenapiSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetOpenapiVersionOpenapiRequest:
    path_params: GetOpenapiVersionOpenapiPathParams = field(default=None)
    security: GetOpenapiVersionOpenapiSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetOpenapiVersionOpenapi404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetOpenapiVersionOpenapi500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetOpenapiVersionOpenapiResponse:
    content_type: str = field(default=None)
    get_openapi_version_openapi_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    get_openapi_version_openapi_404_application_json_object: Optional[GetOpenapiVersionOpenapi404ApplicationJSON] = field(default=None)
    get_openapi_version_openapi_500_application_json_object: Optional[GetOpenapiVersionOpenapi500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
