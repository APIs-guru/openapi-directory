from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SongInAlbumForAPIContract:
    disc_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discNumber') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    song: Optional[SongForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('song') }})
    track_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackNumber') }})
    
