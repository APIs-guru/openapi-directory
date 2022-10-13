from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import explicitcontentsettingsobject
from . import externalurlobject
from . import followersobject
from . import imageobject


@dataclass_json
@dataclass
class PrivateUserObject:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    explicit_content: Optional[explicitcontentsettingsobject.ExplicitContentSettingsObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'explicit_content' }})
    external_urls: Optional[externalurlobject.ExternalURLObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_urls' }})
    followers: Optional[followersobject.FollowersObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followers' }})
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    images: Optional[List[imageobject.ImageObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    product: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
