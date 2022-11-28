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
class SimplifiedAlbumObject:
    r"""SimplifiedAlbumObject

    https://developer.spotify.com/documentation/web-api/reference/#object-simplifiedalbumobject - Find more info on the official Spotify Web API Reference
    """
    
    album_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('album_group') }})
    album_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('album_type') }})
    artists: Optional[List[SimplifiedArtistObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artists') }})
    available_markets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('available_markets') }})
    external_urls: Optional[ExternalURLObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_urls') }})
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    images: Optional[List[ImageObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    release_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('release_date') }})
    release_date_precision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('release_date_precision') }})
    restrictions: Optional[AlbumRestrictionObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictions') }})
    total_tracks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_tracks') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
