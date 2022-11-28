from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ScriptLocalizationDetail:
    config_metadata: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configMetadata') }})
    data: Optional[ScriptDescriptionData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    
