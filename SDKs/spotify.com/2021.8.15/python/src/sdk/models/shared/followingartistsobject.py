from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FollowingArtistsObjectArtists:
    r"""FollowingArtistsObjectArtists

    https://developer.spotify.com/documentation/web-api/reference/#object-cursorpagingobject - Find more info on the official Spotify Web API Reference
    """
    
    cursors: Optional[CursorObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cursors') }})
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    items: Optional[List[ArtistObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclass
class FollowingArtistsObject:
    artists: Optional[FollowingArtistsObjectArtists] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artists') }})
    
