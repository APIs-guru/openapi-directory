from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AlbumObjectTracks:
    r"""AlbumObjectTracks
    The tracks of the album.
    https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
    """
    
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    items: Optional[List[SimplifiedTrackObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclass
class AlbumObject:
    r"""AlbumObject

    https://developer.spotify.com/documentation/web-api/reference/#object-albumobject - Find more info on the official Spotify Web API Reference
    """
    
    album_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('album_type') }})
    artists: Optional[List[ArtistObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artists') }})
    available_markets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('available_markets') }})
    copyrights: Optional[List[CopyrightObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyrights') }})
    external_ids: Optional[ExternalIDObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_ids') }})
    external_urls: Optional[ExternalURLObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_urls') }})
    genres: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genres') }})
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    images: Optional[List[ImageObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    popularity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('popularity') }})
    release_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('release_date') }})
    release_date_precision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('release_date_precision') }})
    restrictions: Optional[AlbumRestrictionObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictions') }})
    total_tracks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_tracks') }})
    tracks: Optional[AlbumObjectTracks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracks') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
