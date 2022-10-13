from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class EditUserAlt1RequestBodyVideosPrivacyCommentsEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    NOBODY = "nobody"

class EditUserAlt1RequestBodyVideosPrivacyEmbedEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC = "public"
    WHITELIST = "whitelist"

class EditUserAlt1RequestBodyVideosPrivacyViewEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    DISABLE = "disable"
    NOBODY = "nobody"
    PASSWORD = "password"
    UNLISTED = "unlisted"
    USERS = "users"


@dataclass_json
@dataclass
class EditUserAlt1RequestBodyVideosPrivacy:
    add: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add' }})
    comments: Optional[EditUserAlt1RequestBodyVideosPrivacyCommentsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    download: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download' }})
    embed: Optional[EditUserAlt1RequestBodyVideosPrivacyEmbedEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embed' }})
    view: Optional[EditUserAlt1RequestBodyVideosPrivacyViewEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'view' }})
    

@dataclass_json
@dataclass
class EditUserAlt1RequestBodyVideos:
    privacy: Optional[EditUserAlt1RequestBodyVideosPrivacy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy' }})
    

@dataclass_json
@dataclass
class EditUserAlt1RequestBody:
    bio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bio' }})
    content_filter: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content_filter' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    videos: Optional[EditUserAlt1RequestBodyVideos] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videos' }})
    

@dataclass
class EditUserAlt1Request:
    request: Optional[EditUserAlt1RequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.user+json' }})
    

@dataclass
class EditUserAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user: Optional[shared.User] = field(default=None)
    
