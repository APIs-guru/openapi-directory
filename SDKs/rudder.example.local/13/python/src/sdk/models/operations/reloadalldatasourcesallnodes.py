from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ReloadAllDatasourcesAllNodes200ApplicationJSONActionEnum(str, Enum):
    RELOAD_ALL_DATASOURCES_ALL_NODES = "ReloadAllDatasourcesAllNodes"

class ReloadAllDatasourcesAllNodes200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ReloadAllDatasourcesAllNodes200ApplicationJSON:
    action: ReloadAllDatasourcesAllNodes200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: ReloadAllDatasourcesAllNodes200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class ReloadAllDatasourcesAllNodesResponse:
    content_type: str = field(default=None)
    reload_all_datasources_all_nodes_200_application_json_object: Optional[ReloadAllDatasourcesAllNodes200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
