from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ErrorLocationTypeEnum(str, Enum):
    REQUEST_BODY = "requestBody"
    QUERY_PARAM = "queryParam"
    REQUEST_PARAM = "requestParam"
    HEADER = "header"
    PATH_PARAM = "pathParam"


@dataclass_json
@dataclass
class Error:
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    error_data: Optional[ErrorData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorData') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    localisation_details: Optional[LocalisationDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localisationDetails') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    location_type: Optional[ErrorLocationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationType') }})
    reason_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reasonCode') }})
    
