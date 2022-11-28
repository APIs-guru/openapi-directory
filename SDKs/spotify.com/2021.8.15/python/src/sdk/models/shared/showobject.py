from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ShowObjectEpisodes:
    r"""ShowObjectEpisodes
    A list of the show's episodes.
    https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
    """
    
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    items: Optional[List[SimplifiedEpisodeObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclass
class ShowObject:
    r"""ShowObject

    https://developer.spotify.com/documentation/web-api/reference/#object-showobject - Find more info on the official Spotify Web API Reference
    """
    
    available_markets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('available_markets') }})
    copyrights: Optional[List[CopyrightObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyrights') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    episodes: Optional[ShowObjectEpisodes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('episodes') }})
    explicit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explicit') }})
    external_urls: Optional[ExternalURLObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_urls') }})
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    html_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    images: Optional[List[ImageObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    is_externally_hosted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_externally_hosted') }})
    languages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages') }})
    media_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('media_type') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    publisher: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
