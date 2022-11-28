from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ReadCvEfromFs200ApplicationJSONActionEnum(str, Enum):
    READ_CV_EFROM_FS = "readCVEfromFS"


@dataclass_json
@dataclass
class ReadCvEfromFs200ApplicationJSONData:
    cv_es: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CVEs') }})
    
class ReadCvEfromFs200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ReadCvEfromFs200ApplicationJSON:
    action: ReadCvEfromFs200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ReadCvEfromFs200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ReadCvEfromFs200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class ReadCvEfromFsResponse:
    content_type: str = field()
    status_code: int = field()
    read_cv_efrom_fs_200_application_json_object: Optional[ReadCvEfromFs200ApplicationJSON] = field(default=None)
    
