from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Sentence:
    book: Optional[Book] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('book') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    sentence: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentence') }})
    
