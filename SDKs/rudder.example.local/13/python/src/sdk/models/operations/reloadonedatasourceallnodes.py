from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class ReloadOneDatasourceAllNodesPathParams:
    datasource_id: str = field(metadata={'path_param': { 'field_name': 'datasourceId', 'style': 'simple', 'explode': False }})
    
class ReloadOneDatasourceAllNodes200ApplicationJSONActionEnum(str, Enum):
    RELOAD_ONE_DATASOURCE_ALL_NODES = "ReloadOneDatasourceAllNodes"

class ReloadOneDatasourceAllNodes200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ReloadOneDatasourceAllNodes200ApplicationJSON:
    action: ReloadOneDatasourceAllNodes200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ReloadOneDatasourceAllNodes200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class ReloadOneDatasourceAllNodesRequest:
    path_params: ReloadOneDatasourceAllNodesPathParams = field()
    

@dataclass
class ReloadOneDatasourceAllNodesResponse:
    content_type: str = field()
    status_code: int = field()
    reload_one_datasource_all_nodes_200_application_json_object: Optional[ReloadOneDatasourceAllNodes200ApplicationJSON] = field(default=None)
    
