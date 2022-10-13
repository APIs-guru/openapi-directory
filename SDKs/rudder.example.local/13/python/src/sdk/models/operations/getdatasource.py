from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetDataSourcePathParams:
    datasource_id: str = field(default=None, metadata={'path_param': { 'field_name': 'datasourceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDataSourceRequest:
    path_params: GetDataSourcePathParams = field(default=None)
    
class GetDataSource200ApplicationJSONActionEnum(str, Enum):
    GET_DATA_SOURCE = "getDataSource"


@dataclass_json
@dataclass
class GetDataSource200ApplicationJSONData:
    datasources: List[shared.Datasource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasources' }})
    
class GetDataSource200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetDataSource200ApplicationJSON:
    action: GetDataSource200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: GetDataSource200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: GetDataSource200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class GetDataSourceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_data_source_200_application_json_object: Optional[GetDataSource200ApplicationJSON] = field(default=None)
    
