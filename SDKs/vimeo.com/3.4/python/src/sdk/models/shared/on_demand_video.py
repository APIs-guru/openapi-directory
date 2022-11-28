from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OnDemandVideoBuy:
    r"""OnDemandVideoBuy
    Information about purchasing this video.
    """
    
    active: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    price: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    purchased: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchased') }})
    

@dataclass_json
@dataclass
class OnDemandVideoInteractionsPage:
    r"""OnDemandVideoInteractionsPage
    Information about how the authenticated user can interact with the connection to the video's On Demand page.
    """
    
    added: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandVideoInteractions:
    r"""OnDemandVideoInteractions
    An object containing information about how the authenticated user can interact with this On Demand page.
    """
    
    page: OnDemandVideoInteractionsPage = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    

@dataclass_json
@dataclass
class OnDemandVideoMetadataConnectionsSeason:
    r"""OnDemandVideoMetadataConnectionsSeason
    Information about this season.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandVideoMetadataConnections:
    season: OnDemandVideoMetadataConnectionsSeason = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('season') }})
    

@dataclass_json
@dataclass
class OnDemandVideoMetadataInteractionsLikes:
    r"""OnDemandVideoMetadataInteractionsLikes
    Information about the user's Like interactions with this video.
    """
    
    added: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_time') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandVideoMetadataInteractionsWatchlater:
    r"""OnDemandVideoMetadataInteractionsWatchlater
    Information about the user's Watch Later interactions with this video.
    """
    
    added: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_time') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandVideoMetadataInteractions:
    likes: OnDemandVideoMetadataInteractionsLikes = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('likes') }})
    watchlater: OnDemandVideoMetadataInteractionsWatchlater = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchlater') }})
    

@dataclass_json
@dataclass
class OnDemandVideoMetadata:
    r"""OnDemandVideoMetadata
    Metadata information about this video.
    """
    
    connections: OnDemandVideoMetadataConnections = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    interactions: OnDemandVideoMetadataInteractions = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    

@dataclass_json
@dataclass
class OnDemandVideoRent:
    r"""OnDemandVideoRent
    Information about renting this video.
    """
    
    active: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    price: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    purchased: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchased') }})
    
class OnDemandVideoTypeEnum(str, Enum):
    EXTRA = "extra"
    MAIN = "main"
    TRAILER = "trailer"


@dataclass_json
@dataclass
class OnDemandVideo:
    buy: OnDemandVideoBuy = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('buy') }})
    interactions: OnDemandVideoInteractions = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    metadata: OnDemandVideoMetadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    play_progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('play_progress') }})
    release_year: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('release_year') }})
    rent: OnDemandVideoRent = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rent') }})
    type: OnDemandVideoTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    episode: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('episode') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    pictures: Optional[Picture] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    position: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    release_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('release_date') }})
    user: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
