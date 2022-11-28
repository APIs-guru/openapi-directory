from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class ReloadAllDatasourcesOneNodePathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    
class ReloadAllDatasourcesOneNode200ApplicationJSONActionEnum(str, Enum):
    RELOAD_ALL_DATASOURCES_ONE_NODE = "ReloadAllDatasourcesOneNode"

class ReloadAllDatasourcesOneNode200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ReloadAllDatasourcesOneNode200ApplicationJSON:
    action: ReloadAllDatasourcesOneNode200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ReloadAllDatasourcesOneNode200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class ReloadAllDatasourcesOneNodeRequest:
    path_params: ReloadAllDatasourcesOneNodePathParams = field()
    

@dataclass
class ReloadAllDatasourcesOneNodeResponse:
    content_type: str = field()
    status_code: int = field()
    reload_all_datasources_one_node_200_application_json_object: Optional[ReloadAllDatasourcesOneNode200ApplicationJSON] = field(default=None)
    
