from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AlbumPictureSizes:
    height: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    width: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    link_with_play_button: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link_with_play_button') }})
    
class AlbumPictureTypeEnum(str, Enum):
    CAUTION = "caution"
    CUSTOM = "custom"
    DEFAULT = "default"


@dataclass_json
@dataclass
class AlbumPicture:
    r"""AlbumPicture
    The custom logo for this album.
    """
    
    active: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    resource_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    sizes: List[AlbumPictureSizes] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizes') }})
    type: AlbumPictureTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    

@dataclass_json
@dataclass
class AlbumEmbed:
    r"""AlbumEmbed
    Embed data for the album.
    """
    
    html: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html') }})
    
class AlbumLayoutEnum(str, Enum):
    GRID = "grid"
    PLAYER = "player"


@dataclass_json
@dataclass
class AlbumMetadataConnectionsVideos:
    r"""AlbumMetadataConnectionsVideos
    Information about the videos that belong to this album.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class AlbumMetadataConnections:
    r"""AlbumMetadataConnections
    A collection of information that is connected to this resource.
    """
    
    videos: AlbumMetadataConnectionsVideos = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclass_json
@dataclass
class AlbumMetadataInteractionsAddCustomThumbnails:
    r"""AlbumMetadataInteractionsAddCustomThumbnails
    An action indicating that the authenticated user is an admin of the album and may therefore add custom thumbnails. This data requires a bearer token with the `private` scope.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class AlbumMetadataInteractionsAddLogos:
    r"""AlbumMetadataInteractionsAddLogos
    An action indicating that the authenticated user is an admin of the album and may therefore add custom logos. This data requires a bearer token with the `private` scope.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class AlbumMetadataInteractionsAddVideos:
    r"""AlbumMetadataInteractionsAddVideos
    An action indicating that the authenticated user is an admin of the album and may therefore add videos. This data requires a bearer token with the `private` scope.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class AlbumMetadataInteractions:
    r"""AlbumMetadataInteractions
    A list of resource URIs related to the album.
    """
    
    add_custom_thumbnails: AlbumMetadataInteractionsAddCustomThumbnails = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_custom_thumbnails') }})
    add_logos: AlbumMetadataInteractionsAddLogos = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_logos') }})
    add_videos: AlbumMetadataInteractionsAddVideos = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_videos') }})
    

@dataclass_json
@dataclass
class AlbumMetadata:
    r"""AlbumMetadata
    Metadata about the album.
    """
    
    connections: AlbumMetadataConnections = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    interactions: AlbumMetadataInteractions = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    
class AlbumPrivacyViewEnum(str, Enum):
    ANYBODY = "anybody"
    EMBED_ONLY = "embed_only"
    PASSWORD = "password"


@dataclass_json
@dataclass
class AlbumPrivacy:
    r"""AlbumPrivacy
    The privacy settings of the album.
    """
    
    view: AlbumPrivacyViewEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    
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
    allow_continuous_play: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_continuous_play') }})
    allow_downloads: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_downloads') }})
    allow_share: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_share') }})
    brand_color: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('brand_color') }})
    created_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    custom_logo: AlbumPicture = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_logo') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    domain: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    duration: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    embed: AlbumEmbed = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    embed_brand_color: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed_brand_color') }})
    embed_custom_logo: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed_custom_logo') }})
    hide_nav: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hide_nav') }})
    hide_vimeo_logo: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hide_vimeo_logo') }})
    layout: AlbumLayoutEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('layout') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    metadata: AlbumMetadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    modified_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified_time') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pictures: Picture = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    privacy: AlbumPrivacy = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    resource_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    review_mode: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('review_mode') }})
    sort: AlbumSortEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sort') }})
    theme: AlbumThemeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('theme') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    use_custom_domain: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_custom_domain') }})
    user: User = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    web_brand_color: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('web_brand_color') }})
    web_custom_logo: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('web_custom_logo') }})
    
