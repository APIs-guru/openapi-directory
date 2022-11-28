from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class APISubInformationsPathParams:
    section_id: str = field(metadata={'path_param': { 'field_name': 'sectionId', 'style': 'simple', 'explode': False }})
    
class APISubInformations200ApplicationJSONActionEnum(str, Enum):
    API_SUB_INFORMATIONS = "apiSubInformations"


@dataclass_json
@dataclass
class APISubInformations200ApplicationJSONData:
    available_versions: List[shared.APIVersions] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableVersions') }})
    documentation: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation') }})
    endpoints: List[List[shared.APIEndpoints]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoints') }})
    
class APISubInformations200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class APISubInformations200ApplicationJSON:
    action: APISubInformations200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: APISubInformations200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: APISubInformations200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class APISubInformationsRequest:
    path_params: APISubInformationsPathParams = field()
    

@dataclass
class APISubInformationsResponse:
    content_type: str = field()
    status_code: int = field()
    api_sub_informations_200_application_json_object: Optional[APISubInformations200ApplicationJSON] = field(default=None)
    
