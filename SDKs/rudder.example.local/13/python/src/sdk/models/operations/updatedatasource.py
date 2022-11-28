from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateDataSourcePathParams:
    datasource_id: str = field(metadata={'path_param': { 'field_name': 'datasourceId', 'style': 'simple', 'explode': False }})
    
class UpdateDataSource200ApplicationJSONActionEnum(str, Enum):
    UPDATE_DATA_SOURCE = "updateDataSource"


@dataclass_json
@dataclass
class UpdateDataSource200ApplicationJSONData:
    datasources: List[shared.Datasource] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasources') }})
    
class UpdateDataSource200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class UpdateDataSource200ApplicationJSON:
    action: UpdateDataSource200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: UpdateDataSource200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: UpdateDataSource200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class UpdateDataSourceRequest:
    path_params: UpdateDataSourcePathParams = field()
    request: Optional[shared.Datasource] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDataSourceResponse:
    content_type: str = field()
    status_code: int = field()
    update_data_source_200_application_json_object: Optional[UpdateDataSource200ApplicationJSON] = field(default=None)
    
