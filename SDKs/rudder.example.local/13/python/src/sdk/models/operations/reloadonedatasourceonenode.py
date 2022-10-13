from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class ReloadOneDatasourceOneNodePathParams:
    datasource_id: str = field(default=None, metadata={'path_param': { 'field_name': 'datasourceId', 'style': 'simple', 'explode': False }})
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReloadOneDatasourceOneNodeRequest:
    path_params: ReloadOneDatasourceOneNodePathParams = field(default=None)
    
class ReloadOneDatasourceOneNode200ApplicationJSONActionEnum(str, Enum):
    RELOAD_ONE_DATASOURCE_ONE_NODE = "ReloadOneDatasourceOneNode"

class ReloadOneDatasourceOneNode200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ReloadOneDatasourceOneNode200ApplicationJSON:
    action: ReloadOneDatasourceOneNode200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: ReloadOneDatasourceOneNode200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class ReloadOneDatasourceOneNodeResponse:
    content_type: str = field(default=None)
    reload_one_datasource_one_node_200_application_json_object: Optional[ReloadOneDatasourceOneNode200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
