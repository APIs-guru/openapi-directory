from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class APIVersionAll:
    status: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    version: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclass
class APIVersion:
    all: Optional[List[APIVersionAll]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('all') }})
    latest: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latest') }})
    
