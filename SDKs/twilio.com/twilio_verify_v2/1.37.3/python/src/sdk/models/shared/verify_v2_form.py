from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VerifyV2Form:
    form_meta: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form_meta') }})
    form_type: Optional[FormEnumFormTypesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form_type') }})
    forms: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forms') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
