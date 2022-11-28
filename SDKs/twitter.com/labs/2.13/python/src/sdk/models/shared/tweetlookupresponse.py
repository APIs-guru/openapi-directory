from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TweetLookupResponse:
    data: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    errors: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    includes: Optional[Expansions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includes') }})
    
