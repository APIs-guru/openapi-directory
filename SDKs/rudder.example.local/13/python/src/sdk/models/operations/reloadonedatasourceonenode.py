from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class ReloadOneDatasourceOneNodePathParams:
    datasource_id: str = field(metadata={'path_param': { 'field_name': 'datasourceId', 'style': 'simple', 'explode': False }})
    node_id: str = field(metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    
class ReloadOneDatasourceOneNode200ApplicationJSONActionEnum(str, Enum):
    RELOAD_ONE_DATASOURCE_ONE_NODE = "ReloadOneDatasourceOneNode"

class ReloadOneDatasourceOneNode200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ReloadOneDatasourceOneNode200ApplicationJSON:
    action: ReloadOneDatasourceOneNode200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ReloadOneDatasourceOneNode200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class ReloadOneDatasourceOneNodeRequest:
    path_params: ReloadOneDatasourceOneNodePathParams = field()
    

@dataclass
class ReloadOneDatasourceOneNodeResponse:
    content_type: str = field()
    status_code: int = field()
    reload_one_datasource_one_node_200_application_json_object: Optional[ReloadOneDatasourceOneNode200ApplicationJSON] = field(default=None)
    
