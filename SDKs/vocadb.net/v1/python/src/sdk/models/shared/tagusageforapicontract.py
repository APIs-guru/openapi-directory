from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TagUsageForAPIContract:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    tag: Optional[TagBaseContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    
