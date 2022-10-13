from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import albumforapicontract
from . import releaseeventforapicontract
from . import songforapicontract
from . import albumforapicontract
from . import songforapicontract


@dataclass_json
@dataclass
class ArtistRelationsForAPI:
    latest_albums: Optional[List[albumforapicontract.AlbumForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestAlbums' }})
    latest_events: Optional[List[releaseeventforapicontract.ReleaseEventForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestEvents' }})
    latest_songs: Optional[List[songforapicontract.SongForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestSongs' }})
    popular_albums: Optional[List[albumforapicontract.AlbumForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'popularAlbums' }})
    popular_songs: Optional[List[songforapicontract.SongForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'popularSongs' }})
    
