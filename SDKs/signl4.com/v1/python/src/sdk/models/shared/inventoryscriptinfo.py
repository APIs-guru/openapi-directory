from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InventoryScriptInfo:
    config: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    data: Optional[ScriptDescriptionData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    event_pattern: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventPattern') }})
    script_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scriptId') }})
    script_localization_details: Optional[List[ScriptLocalizationDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scriptLocalizationDetails') }})
    script_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scriptName') }})
    visibility: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    
