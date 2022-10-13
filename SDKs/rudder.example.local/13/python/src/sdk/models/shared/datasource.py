from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class DatasourceRunParametersScheduleTypeEnum(str, Enum):
    SCHEDULED = "scheduled"
    NOTSCHEDULED = "notscheduled"


@dataclass_json
@dataclass
class DatasourceRunParametersSchedule:
    type: Optional[DatasourceRunParametersScheduleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class DatasourceRunParameters:
    on_generation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onGeneration' }})
    on_new_node: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onNewNode' }})
    schedule: Optional[DatasourceRunParametersSchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule' }})
    
class DatasourceTypeNameEnum(str, Enum):
    HTTP = "HTTP"


@dataclass_json
@dataclass
class DatasourceTypeParametersHeaders:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
class DatasourceTypeParametersRequestMethodEnum(str, Enum):
    GET = "GET"
    POST = "POST"

class DatasourceTypeParametersRequestModeNameEnum(str, Enum):
    BY_NODE = "byNode"


@dataclass_json
@dataclass
class DatasourceTypeParametersRequestMode:
    name: Optional[DatasourceTypeParametersRequestModeNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class DatasourceTypeParameters:
    check_ssl: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkSsl' }})
    headers: Optional[List[DatasourceTypeParametersHeaders]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    request_method: Optional[DatasourceTypeParametersRequestMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestMethod' }})
    request_mode: Optional[DatasourceTypeParametersRequestMode] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestMode' }})
    request_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestTimeout' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class DatasourceType:
    name: Optional[DatasourceTypeNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parameters: Optional[DatasourceTypeParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    

@dataclass_json
@dataclass
class Datasource:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    run_parameters: Optional[DatasourceRunParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runParameters' }})
    type: Optional[DatasourceType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    update_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTimeout' }})
    
