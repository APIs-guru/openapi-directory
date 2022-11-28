from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateCveCheckConfigurationRequestBody:
    r"""UpdateCveCheckConfigurationRequestBody
    CVE check config
    """
    
    api_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKey') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
class UpdateCveCheckConfiguration200ApplicationJSONActionEnum(str, Enum):
    UPDATE_CVE_CHECK_CONFIGURATION = "updateCVECheckConfiguration"


@dataclass_json
@dataclass
class UpdateCveCheckConfiguration200ApplicationJSONData:
    api_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKey') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
class UpdateCveCheckConfiguration200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class UpdateCveCheckConfiguration200ApplicationJSON:
    action: UpdateCveCheckConfiguration200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: UpdateCveCheckConfiguration200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: UpdateCveCheckConfiguration200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class UpdateCveCheckConfigurationRequest:
    request: Optional[UpdateCveCheckConfigurationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateCveCheckConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    update_cve_check_configuration_200_application_json_object: Optional[UpdateCveCheckConfiguration200ApplicationJSON] = field(default=None)
    
