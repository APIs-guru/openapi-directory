from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RelatedSongsContract:
    artist_matches: Optional[List[SongForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artistMatches') }})
    like_matches: Optional[List[SongForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('likeMatches') }})
    tag_matches: Optional[List[SongForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagMatches') }})
    
