from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import errordata
from . import localisationdetails

class ErrorLocationTypeEnum(str, Enum):
    REQUEST_BODY = "requestBody"
    QUERY_PARAM = "queryParam"
    REQUEST_PARAM = "requestParam"
    HEADER = "header"
    PATH_PARAM = "pathParam"


@dataclass_json
@dataclass
class Error:
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorCode' }})
    error_data: Optional[errordata.ErrorData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorData' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    localisation_details: Optional[localisationdetails.LocalisationDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localisationDetails' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    location_type: Optional[ErrorLocationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationType' }})
    reason_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reasonCode' }})
    
