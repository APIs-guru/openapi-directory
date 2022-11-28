from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TrackObject:
    r"""TrackObject

    https://developer.spotify.com/documentation/web-api/reference/#object-trackobject - Find more info on the official Spotify Web API Reference
    """
    
    album: Optional[SimplifiedAlbumObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('album') }})
    artists: Optional[List[ArtistObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artists') }})
    available_markets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('available_markets') }})
    disc_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disc_number') }})
    duration_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration_ms') }})
    explicit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explicit') }})
    external_ids: Optional[ExternalIDObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_ids') }})
    external_urls: Optional[ExternalURLObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_urls') }})
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_local: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_local') }})
    is_playable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_playable') }})
    linked_from: Optional[LinkedTrackObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linked_from') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    popularity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('popularity') }})
    preview_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preview_url') }})
    restrictions: Optional[TrackRestrictionObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictions') }})
    track_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('track_number') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
