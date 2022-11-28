from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteDataSourcePathParams:
    datasource_id: str = field(metadata={'path_param': { 'field_name': 'datasourceId', 'style': 'simple', 'explode': False }})
    
class DeleteDataSource200ApplicationJSONActionEnum(str, Enum):
    DELETE_DATA_SOURCE = "deleteDataSource"


@dataclass_json
@dataclass
class DeleteDataSource200ApplicationJSONData:
    datasources: List[shared.Datasource] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasources') }})
    
class DeleteDataSource200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class DeleteDataSource200ApplicationJSON:
    action: DeleteDataSource200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: DeleteDataSource200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: DeleteDataSource200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class DeleteDataSourceRequest:
    path_params: DeleteDataSourcePathParams = field()
    

@dataclass
class DeleteDataSourceResponse:
    content_type: str = field()
    status_code: int = field()
    delete_data_source_200_application_json_object: Optional[DeleteDataSource200ApplicationJSON] = field(default=None)
    
