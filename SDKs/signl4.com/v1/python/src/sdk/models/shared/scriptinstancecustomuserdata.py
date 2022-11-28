from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ScriptInstanceCustomUserData:
    custom_script_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customScriptDescription') }})
    custom_script_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customScriptName') }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceId') }})
    script_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scriptId') }})
    
