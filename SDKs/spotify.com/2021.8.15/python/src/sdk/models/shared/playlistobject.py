from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PlaylistObjectTracks:
    r"""PlaylistObjectTracks
    Information about the tracks of the playlist. Note, a track object may be `null`. This can happen if a track is no longer available.
    https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
    """
    
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    items: Optional[List[PlaylistTrackObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclass
class PlaylistObject:
    r"""PlaylistObject

    https://developer.spotify.com/documentation/web-api/reference/#object-playlistobject - Find more info on the official Spotify Web API Reference
    """
    
    collaborative: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collaborative') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    external_urls: Optional[ExternalURLObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_urls') }})
    followers: Optional[FollowersObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers') }})
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    images: Optional[List[ImageObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner: Optional[PublicUserObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    snapshot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshot_id') }})
    tracks: Optional[PlaylistObjectTracks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracks') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
