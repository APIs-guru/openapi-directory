from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SongInListEditContractInput:
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order') }})
    song: Optional[SongForAPIContractInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('song') }})
    song_in_list_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('songInListId') }})
    
