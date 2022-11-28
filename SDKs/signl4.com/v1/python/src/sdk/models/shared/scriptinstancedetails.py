from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ScriptInstanceDetails:
    config: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    custom_script_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customScriptDescription') }})
    custom_script_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customScriptName') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    event_pattern: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventPattern') }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceId') }})
    last_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModified'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    runtime_information: Optional[ScriptInstanceInfoRuntimeInformationModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeInformation') }})
    script_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scriptId') }})
    script_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scriptName') }})
    subscription_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionId') }})
    team_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teamId') }})
    
