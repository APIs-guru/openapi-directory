from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class APIInformationsPathParams:
    endpoint_name: str = field(metadata={'path_param': { 'field_name': 'endpointName', 'style': 'simple', 'explode': False }})
    
class APIInformations200ApplicationJSONActionEnum(str, Enum):
    API_INFORMATIONS = "apiInformations"


@dataclass_json
@dataclass
class APIInformations200ApplicationJSONDataEndpoints:
    r"""APIInformations200ApplicationJSONDataEndpoints
    Supported path and version for that endpoint
    """
    
    http_verb: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpVerb') }})
    version: Optional[shared.APIVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclass
class APIInformations200ApplicationJSONData:
    documentation: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation') }})
    endpoint_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointName') }})
    endpoints: List[APIInformations200ApplicationJSONDataEndpoints] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoints') }})
    
class APIInformations200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class APIInformations200ApplicationJSON:
    action: APIInformations200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: APIInformations200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: APIInformations200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class APIInformationsRequest:
    path_params: APIInformationsPathParams = field()
    

@dataclass
class APIInformationsResponse:
    content_type: str = field()
    status_code: int = field()
    api_informations_200_application_json_object: Optional[APIInformations200ApplicationJSON] = field(default=None)
    
