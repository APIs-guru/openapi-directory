from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class CreateDataSource200ApplicationJSONActionEnum(str, Enum):
    CREATE_DATA_SOURCE = "createDataSource"


@dataclass_json
@dataclass
class CreateDataSource200ApplicationJSONData:
    r"""CreateDataSource200ApplicationJSONData
    Information about the data sources
    """
    
    datasources: List[shared.Datasource] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasources') }})
    
class CreateDataSource200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class CreateDataSource200ApplicationJSON:
    action: CreateDataSource200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: CreateDataSource200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: CreateDataSource200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class CreateDataSourceRequest:
    request: Optional[shared.Datasource] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDataSourceResponse:
    content_type: str = field()
    status_code: int = field()
    create_data_source_200_application_json_object: Optional[CreateDataSource200ApplicationJSON] = field(default=None)
    
