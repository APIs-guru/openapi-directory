from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ArtistObject:
    r"""ArtistObject

    https://developer.spotify.com/documentation/web-api/reference/#object-artistobject - Find more info on the official Spotify Web API Reference
    """
    
    external_urls: Optional[ExternalURLObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_urls') }})
    followers: Optional[FollowersObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers') }})
    genres: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genres') }})
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    images: Optional[List[ImageObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    popularity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('popularity') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
