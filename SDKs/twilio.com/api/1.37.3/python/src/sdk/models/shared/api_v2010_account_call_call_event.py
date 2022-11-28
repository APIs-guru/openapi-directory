from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class APIV2010AccountCallCallEvent:
    request: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request') }})
    response: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    
