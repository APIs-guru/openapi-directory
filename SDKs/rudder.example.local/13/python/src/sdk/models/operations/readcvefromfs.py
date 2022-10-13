from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ReadCvEfromFs200ApplicationJSONActionEnum(str, Enum):
    READ_CV_EFROM_FS = "readCVEfromFS"


@dataclass_json
@dataclass
class ReadCvEfromFs200ApplicationJSONData:
    cv_es: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CVEs' }})
    
class ReadCvEfromFs200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ReadCvEfromFs200ApplicationJSON:
    action: ReadCvEfromFs200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: ReadCvEfromFs200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: ReadCvEfromFs200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class ReadCvEfromFsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    read_cv_efrom_fs_200_application_json_object: Optional[ReadCvEfromFs200ApplicationJSON] = field(default=None)
    
