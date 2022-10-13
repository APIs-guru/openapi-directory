from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import songforapicontract
from . import songforapicontract
from . import songforapicontract


@dataclass_json
@dataclass
class RelatedSongsContract:
    artist_matches: Optional[List[songforapicontract.SongForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artistMatches' }})
    like_matches: Optional[List[songforapicontract.SongForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'likeMatches' }})
    tag_matches: Optional[List[songforapicontract.SongForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagMatches' }})
    
