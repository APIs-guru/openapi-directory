from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DatasourceRunParametersScheduleTypeEnum(str, Enum):
    SCHEDULED = "scheduled"
    NOTSCHEDULED = "notscheduled"


@dataclass_json
@dataclass
class DatasourceRunParametersSchedule:
    r"""DatasourceRunParametersSchedule
    Configure if data source should be fetch periodically
    """
    
    type: Optional[DatasourceRunParametersScheduleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class DatasourceRunParameters:
    r"""DatasourceRunParameters
    Parameters to configure when the data source is fetched to update node properties.
    """
    
    on_generation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onGeneration') }})
    on_new_node: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onNewNode') }})
    schedule: Optional[DatasourceRunParametersSchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    
class DatasourceTypeNameEnum(str, Enum):
    HTTP = "HTTP"


@dataclass_json
@dataclass
class DatasourceTypeParametersHeaders:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class DatasourceTypeParametersRequestMethodEnum(str, Enum):
    GET = "GET"
    POST = "POST"

class DatasourceTypeParametersRequestModeNameEnum(str, Enum):
    BY_NODE = "byNode"


@dataclass_json
@dataclass
class DatasourceTypeParametersRequestMode:
    r"""DatasourceTypeParametersRequestMode
    Configure the strategy used to query the HTTP data source.
    """
    
    name: Optional[DatasourceTypeParametersRequestModeNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class DatasourceTypeParameters:
    r"""DatasourceTypeParameters
    You can use Rudder variable expansion (`${rudder.node`, `${node.properties...}`)
    """
    
    check_ssl: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkSsl') }})
    headers: Optional[List[DatasourceTypeParametersHeaders]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    request_method: Optional[DatasourceTypeParametersRequestMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMethod') }})
    request_mode: Optional[DatasourceTypeParametersRequestMode] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMode') }})
    request_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestTimeout') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class DatasourceType:
    r"""DatasourceType
    Define and configure data source type.
    """
    
    name: Optional[DatasourceTypeNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parameters: Optional[DatasourceTypeParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    

@dataclass_json
@dataclass
class Datasource:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    run_parameters: Optional[DatasourceRunParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runParameters') }})
    type: Optional[DatasourceType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    update_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTimeout') }})
    
