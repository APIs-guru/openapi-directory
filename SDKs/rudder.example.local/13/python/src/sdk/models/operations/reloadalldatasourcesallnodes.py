from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ReloadAllDatasourcesAllNodes200ApplicationJSONActionEnum(str, Enum):
    RELOAD_ALL_DATASOURCES_ALL_NODES = "ReloadAllDatasourcesAllNodes"

class ReloadAllDatasourcesAllNodes200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ReloadAllDatasourcesAllNodes200ApplicationJSON:
    action: ReloadAllDatasourcesAllNodes200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ReloadAllDatasourcesAllNodes200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class ReloadAllDatasourcesAllNodesResponse:
    content_type: str = field()
    status_code: int = field()
    reload_all_datasources_all_nodes_200_application_json_object: Optional[ReloadAllDatasourcesAllNodes200ApplicationJSON] = field(default=None)
    
