from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetCveCheckConfiguration200ApplicationJSONActionEnum(str, Enum):
    GET_CVE_CHECK_CONFIGURATION = "getCVECheckConfiguration"


@dataclass_json
@dataclass
class GetCveCheckConfiguration200ApplicationJSONData:
    api_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKey') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
class GetCveCheckConfiguration200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetCveCheckConfiguration200ApplicationJSON:
    action: GetCveCheckConfiguration200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetCveCheckConfiguration200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetCveCheckConfiguration200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class GetCveCheckConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    get_cve_check_configuration_200_application_json_object: Optional[GetCveCheckConfiguration200ApplicationJSON] = field(default=None)
    
