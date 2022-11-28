from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class GetAllDataSources200ApplicationJSONActionEnum(str, Enum):
    GET_ALL_DATA_SOURCES = "getAllDataSources"


@dataclass_json
@dataclass
class GetAllDataSources200ApplicationJSONData:
    datasources: List[shared.Datasource] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasources') }})
    
class GetAllDataSources200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetAllDataSources200ApplicationJSON:
    action: GetAllDataSources200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetAllDataSources200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetAllDataSources200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class GetAllDataSourcesResponse:
    content_type: str = field()
    status_code: int = field()
    get_all_data_sources_200_application_json_object: Optional[GetAllDataSources200ApplicationJSON] = field(default=None)
    
