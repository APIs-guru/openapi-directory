from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PrivateUserObject:
    r"""PrivateUserObject

    https://developer.spotify.com/documentation/web-api/reference/#object-privateuserobject - Find more info on the official Spotify Web API Reference
    """
    
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    explicit_content: Optional[ExplicitContentSettingsObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explicit_content') }})
    external_urls: Optional[ExternalURLObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_urls') }})
    followers: Optional[FollowersObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers') }})
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    images: Optional[List[ImageObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    product: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
