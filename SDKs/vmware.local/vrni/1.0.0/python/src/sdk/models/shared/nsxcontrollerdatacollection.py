from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NsxControllerDataCollection:
    controller_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('controller_password') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    
