from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetDataSourcePathParams:
    datasource_id: str = field(metadata={'path_param': { 'field_name': 'datasourceId', 'style': 'simple', 'explode': False }})
    
class GetDataSource200ApplicationJSONActionEnum(str, Enum):
    GET_DATA_SOURCE = "getDataSource"


@dataclass_json
@dataclass
class GetDataSource200ApplicationJSONData:
    datasources: List[shared.Datasource] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasources') }})
    
class GetDataSource200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetDataSource200ApplicationJSON:
    action: GetDataSource200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetDataSource200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetDataSource200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class GetDataSourceRequest:
    path_params: GetDataSourcePathParams = field()
    

@dataclass
class GetDataSourceResponse:
    content_type: str = field()
    status_code: int = field()
    get_data_source_200_application_json_object: Optional[GetDataSource200ApplicationJSON] = field(default=None)
    
