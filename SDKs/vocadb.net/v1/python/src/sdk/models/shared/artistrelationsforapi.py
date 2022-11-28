from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ArtistRelationsForAPI:
    latest_albums: Optional[List[AlbumForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestAlbums') }})
    latest_events: Optional[List[ReleaseEventForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestEvents') }})
    latest_songs: Optional[List[SongForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestSongs') }})
    popular_albums: Optional[List[AlbumForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('popularAlbums') }})
    popular_songs: Optional[List[SongForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('popularSongs') }})
    
