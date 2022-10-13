from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteDataSourcePathParams:
    datasource_id: str = field(default=None, metadata={'path_param': { 'field_name': 'datasourceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDataSourceRequest:
    path_params: DeleteDataSourcePathParams = field(default=None)
    
class DeleteDataSource200ApplicationJSONActionEnum(str, Enum):
    DELETE_DATA_SOURCE = "deleteDataSource"


@dataclass_json
@dataclass
class DeleteDataSource200ApplicationJSONData:
    datasources: List[shared.Datasource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasources' }})
    
class DeleteDataSource200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class DeleteDataSource200ApplicationJSON:
    action: DeleteDataSource200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: DeleteDataSource200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: DeleteDataSource200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class DeleteDataSourceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_data_source_200_application_json_object: Optional[DeleteDataSource200ApplicationJSON] = field(default=None)
    
