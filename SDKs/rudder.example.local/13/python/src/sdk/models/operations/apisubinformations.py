from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class APISubInformationsPathParams:
    section_id: str = field(default=None, metadata={'path_param': { 'field_name': 'sectionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class APISubInformationsRequest:
    path_params: APISubInformationsPathParams = field(default=None)
    
class APISubInformations200ApplicationJSONActionEnum(str, Enum):
    API_SUB_INFORMATIONS = "apiSubInformations"


@dataclass_json
@dataclass
class APISubInformations200ApplicationJSONData:
    available_versions: List[shared.APIVersions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableVersions' }})
    documentation: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation' }})
    endpoints: List[List[shared.APIEndpoints]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpoints' }})
    
class APISubInformations200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class APISubInformations200ApplicationJSON:
    action: APISubInformations200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: APISubInformations200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: APISubInformations200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class APISubInformationsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_sub_informations_200_application_json_object: Optional[APISubInformations200ApplicationJSON] = field(default=None)
    
