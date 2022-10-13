from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import scriptinstanceinforuntimeinformationmodel


@dataclass_json
@dataclass
class ScriptInstanceDetails:
    config: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    custom_script_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customScriptDescription' }})
    custom_script_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customScriptName' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    event_pattern: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventPattern' }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceId' }})
    last_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModified', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    runtime_information: Optional[scriptinstanceinforuntimeinformationmodel.ScriptInstanceInfoRuntimeInformationModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtimeInformation' }})
    script_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scriptId' }})
    script_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scriptName' }})
    subscription_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptionId' }})
    team_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teamId' }})
    
