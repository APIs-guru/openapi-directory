from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class ReloadOneDatasourceAllNodesPathParams:
    datasource_id: str = field(default=None, metadata={'path_param': { 'field_name': 'datasourceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReloadOneDatasourceAllNodesRequest:
    path_params: ReloadOneDatasourceAllNodesPathParams = field(default=None)
    
class ReloadOneDatasourceAllNodes200ApplicationJSONActionEnum(str, Enum):
    RELOAD_ONE_DATASOURCE_ALL_NODES = "ReloadOneDatasourceAllNodes"

class ReloadOneDatasourceAllNodes200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ReloadOneDatasourceAllNodes200ApplicationJSON:
    action: ReloadOneDatasourceAllNodes200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: ReloadOneDatasourceAllNodes200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class ReloadOneDatasourceAllNodesResponse:
    content_type: str = field(default=None)
    reload_one_datasource_all_nodes_200_application_json_object: Optional[ReloadOneDatasourceAllNodes200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
