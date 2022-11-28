from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateCveRequestBody:
    r"""UpdateCveRequestBody
    CVE update config
    """
    
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    years: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('years') }})
    
class UpdateCve200ApplicationJSONActionEnum(str, Enum):
    UPDATE_CVE = "updateCVE"


@dataclass_json
@dataclass
class UpdateCve200ApplicationJSONData:
    cv_es: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CVEs') }})
    
class UpdateCve200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class UpdateCve200ApplicationJSON:
    action: UpdateCve200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: UpdateCve200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: UpdateCve200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class UpdateCveRequest:
    request: Optional[UpdateCveRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateCveResponse:
    content_type: str = field()
    status_code: int = field()
    update_cve_200_application_json_object: Optional[UpdateCve200ApplicationJSON] = field(default=None)
    
