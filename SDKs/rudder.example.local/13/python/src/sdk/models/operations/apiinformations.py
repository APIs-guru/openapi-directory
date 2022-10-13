from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class APIInformationsPathParams:
    endpoint_name: str = field(default=None, metadata={'path_param': { 'field_name': 'endpointName', 'style': 'simple', 'explode': False }})
    

@dataclass
class APIInformationsRequest:
    path_params: APIInformationsPathParams = field(default=None)
    
class APIInformations200ApplicationJSONActionEnum(str, Enum):
    API_INFORMATIONS = "apiInformations"


@dataclass_json
@dataclass
class APIInformations200ApplicationJSONDataEndpoints:
    http_verb: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpVerb' }})
    version: Optional[shared.APIVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

@dataclass_json
@dataclass
class APIInformations200ApplicationJSONData:
    documentation: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation' }})
    endpoint_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpointName' }})
    endpoints: List[APIInformations200ApplicationJSONDataEndpoints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpoints' }})
    
class APIInformations200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class APIInformations200ApplicationJSON:
    action: APIInformations200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: APIInformations200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: APIInformations200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class APIInformationsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_informations_200_application_json_object: Optional[APIInformations200ApplicationJSON] = field(default=None)
    
