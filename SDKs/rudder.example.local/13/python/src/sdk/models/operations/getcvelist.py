from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class GetCveListRequestBody:
    r"""GetCveListRequestBody
    cveList
    """
    
    cve_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cveIds') }})
    
class GetCveList200ApplicationJSONActionEnum(str, Enum):
    GET_CVE_LIST = "getCVEList"


@dataclass_json
@dataclass
class GetCveList200ApplicationJSONData:
    cv_es: List[shared.CveDetails] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CVEs') }})
    
class GetCveList200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetCveList200ApplicationJSON:
    action: GetCveList200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetCveList200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetCveList200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class GetCveListRequest:
    request: Optional[GetCveListRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetCveListResponse:
    content_type: str = field()
    status_code: int = field()
    get_cve_list_200_application_json_object: Optional[GetCveList200ApplicationJSON] = field(default=None)
    
