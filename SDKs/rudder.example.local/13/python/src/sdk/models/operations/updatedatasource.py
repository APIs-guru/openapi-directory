from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateDataSourcePathParams:
    datasource_id: str = field(default=None, metadata={'path_param': { 'field_name': 'datasourceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDataSourceRequest:
    path_params: UpdateDataSourcePathParams = field(default=None)
    request: Optional[shared.Datasource] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class UpdateDataSource200ApplicationJSONActionEnum(str, Enum):
    UPDATE_DATA_SOURCE = "updateDataSource"


@dataclass_json
@dataclass
class UpdateDataSource200ApplicationJSONData:
    datasources: List[shared.Datasource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasources' }})
    
class UpdateDataSource200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class UpdateDataSource200ApplicationJSON:
    action: UpdateDataSource200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: UpdateDataSource200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: UpdateDataSource200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class UpdateDataSourceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_data_source_200_application_json_object: Optional[UpdateDataSource200ApplicationJSON] = field(default=None)
    
