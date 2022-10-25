from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import picture
from . import user


@dataclass_json
@dataclass
class AlbumPictureSizes:
    height: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    link_with_play_button: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link_with_play_button' }})
    width: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
class AlbumPictureTypeEnum(str, Enum):
    CAUTION = "caution"
    CUSTOM = "custom"
    DEFAULT = "default"


@dataclass_json
@dataclass
class AlbumPicture:
    active: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    resource_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_key' }})
    sizes: List[AlbumPictureSizes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizes' }})
    type: AlbumPictureTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class AlbumEmbed:
    html: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html' }})
    
class AlbumLayoutEnum(str, Enum):
    GRID = "grid"
    PLAYER = "player"


@dataclass_json
@dataclass
class AlbumMetadataConnectionsVideos:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class AlbumMetadataConnections:
    videos: AlbumMetadataConnectionsVideos = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videos' }})
    

@dataclass_json
@dataclass
class AlbumMetadataInteractionsAddCustomThumbnails:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class AlbumMetadataInteractionsAddLogos:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class AlbumMetadataInteractionsAddVideos:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class AlbumMetadataInteractions:
    add_custom_thumbnails: AlbumMetadataInteractionsAddCustomThumbnails = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add_custom_thumbnails' }})
    add_logos: AlbumMetadataInteractionsAddLogos = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add_logos' }})
    add_videos: AlbumMetadataInteractionsAddVideos = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add_videos' }})
    

@dataclass_json
@dataclass
class AlbumMetadata:
    connections: AlbumMetadataConnections = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connections' }})
    interactions: AlbumMetadataInteractions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interactions' }})
    
class AlbumPrivacyViewEnum(str, Enum):
    ANYBODY = "anybody"
    EMBED_ONLY = "embed_only"
    PASSWORD = "password"


@dataclass_json
@dataclass
class AlbumPrivacy:
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    view: AlbumPrivacyViewEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'view' }})
    
class AlbumSortEnum(str, Enum):
    ADDED_FIRST = "added_first"
    ADDED_LAST = "added_last"
    ALPHABETICAL = "alphabetical"
    ARRANGED = "arranged"
    COMMENTS = "comments"
    LIKES = "likes"
    NEWEST = "newest"
    OLDEST = "oldest"
    PLAYS = "plays"

class AlbumThemeEnum(str, Enum):
    DARK = "dark"
    STANDARD = "standard"


@dataclass_json
@dataclass
class Album:
    allow_continuous_play: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_continuous_play' }})
    allow_downloads: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_downloads' }})
    allow_share: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_share' }})
    brand_color: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brand_color' }})
    created_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_time' }})
    custom_logo: AlbumPicture = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_logo' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    duration: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    embed: AlbumEmbed = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embed' }})
    embed_brand_color: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embed_brand_color' }})
    embed_custom_logo: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embed_custom_logo' }})
    hide_nav: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hide_nav' }})
    hide_vimeo_logo: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hide_vimeo_logo' }})
    layout: AlbumLayoutEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layout' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    metadata: AlbumMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    modified_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modified_time' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pictures: picture.Picture = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pictures' }})
    privacy: AlbumPrivacy = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy' }})
    resource_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_key' }})
    review_mode: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'review_mode' }})
    sort: AlbumSortEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sort' }})
    theme: AlbumThemeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'theme' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    use_custom_domain: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'use_custom_domain' }})
    user: user.User = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    web_brand_color: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'web_brand_color' }})
    web_custom_logo: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'web_custom_logo' }})
    
