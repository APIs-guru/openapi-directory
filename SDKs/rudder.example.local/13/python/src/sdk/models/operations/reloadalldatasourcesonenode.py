from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class ReloadAllDatasourcesOneNodePathParams:
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReloadAllDatasourcesOneNodeRequest:
    path_params: ReloadAllDatasourcesOneNodePathParams = field(default=None)
    
class ReloadAllDatasourcesOneNode200ApplicationJSONActionEnum(str, Enum):
    RELOAD_ALL_DATASOURCES_ONE_NODE = "ReloadAllDatasourcesOneNode"

class ReloadAllDatasourcesOneNode200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ReloadAllDatasourcesOneNode200ApplicationJSON:
    action: ReloadAllDatasourcesOneNode200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: ReloadAllDatasourcesOneNode200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class ReloadAllDatasourcesOneNodeResponse:
    content_type: str = field(default=None)
    reload_all_datasources_one_node_200_application_json_object: Optional[ReloadAllDatasourcesOneNode200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
