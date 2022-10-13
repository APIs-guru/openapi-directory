from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class GetAllDataSources200ApplicationJSONActionEnum(str, Enum):
    GET_ALL_DATA_SOURCES = "getAllDataSources"


@dataclass_json
@dataclass
class GetAllDataSources200ApplicationJSONData:
    datasources: List[shared.Datasource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasources' }})
    
class GetAllDataSources200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetAllDataSources200ApplicationJSON:
    action: GetAllDataSources200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: GetAllDataSources200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: GetAllDataSources200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class GetAllDataSourcesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_all_data_sources_200_application_json_object: Optional[GetAllDataSources200ApplicationJSON] = field(default=None)
    
