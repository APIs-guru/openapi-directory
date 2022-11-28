from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Classification:
    r"""Classification
    Classification
    """
    
    genre: Optional[Level] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genre') }})
    primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    segment: Optional[Segment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segment') }})
    sub_genre: Optional[Level] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subGenre') }})
    sub_type: Optional[Level] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subType') }})
    type: Optional[Level] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
