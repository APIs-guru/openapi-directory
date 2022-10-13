from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateDataSourceRequest:
    request: Optional[shared.Datasource] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class CreateDataSource200ApplicationJSONActionEnum(str, Enum):
    CREATE_DATA_SOURCE = "createDataSource"


@dataclass_json
@dataclass
class CreateDataSource200ApplicationJSONData:
    datasources: List[shared.Datasource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasources' }})
    
class CreateDataSource200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class CreateDataSource200ApplicationJSON:
    action: CreateDataSource200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: CreateDataSource200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: CreateDataSource200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class CreateDataSourceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_data_source_200_application_json_object: Optional[CreateDataSource200ApplicationJSON] = field(default=None)
    
