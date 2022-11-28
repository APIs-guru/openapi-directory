from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CodeExternalStandard:
    code_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('codeString') }})
    external_standard: Optional[ExternalStandard] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalStandard') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
