from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class APIGeneralInformations200ApplicationJSONActionEnum(str, Enum):
    API_GENERAL_INFORMATIONS = "apiGeneralInformations"


@dataclass_json
@dataclass
class APIGeneralInformations200ApplicationJSONData:
    available_versions: List[shared.APIVersions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableVersions' }})
    documentation: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation' }})
    endpoints: List[List[shared.APIEndpoints]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpoints' }})
    
class APIGeneralInformations200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class APIGeneralInformations200ApplicationJSON:
    action: APIGeneralInformations200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: APIGeneralInformations200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: APIGeneralInformations200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class APIGeneralInformationsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_general_informations_200_application_json_object: Optional[APIGeneralInformations200ApplicationJSON] = field(default=None)
    
