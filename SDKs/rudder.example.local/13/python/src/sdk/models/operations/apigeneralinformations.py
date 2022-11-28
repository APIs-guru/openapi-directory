from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class APIGeneralInformations200ApplicationJSONActionEnum(str, Enum):
    API_GENERAL_INFORMATIONS = "apiGeneralInformations"


@dataclass_json
@dataclass
class APIGeneralInformations200ApplicationJSONData:
    available_versions: List[shared.APIVersions] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableVersions') }})
    documentation: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation') }})
    endpoints: List[List[shared.APIEndpoints]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoints') }})
    
class APIGeneralInformations200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class APIGeneralInformations200ApplicationJSON:
    action: APIGeneralInformations200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: APIGeneralInformations200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: APIGeneralInformations200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class APIGeneralInformationsResponse:
    content_type: str = field()
    status_code: int = field()
    api_general_informations_200_application_json_object: Optional[APIGeneralInformations200ApplicationJSON] = field(default=None)
    
