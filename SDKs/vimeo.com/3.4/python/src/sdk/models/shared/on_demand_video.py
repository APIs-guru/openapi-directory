from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import picture
from . import user


@dataclass_json
@dataclass
class OnDemandVideoBuy:
    active: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    price: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    purchased: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchased' }})
    

@dataclass_json
@dataclass
class OnDemandVideoInteractionsPage:
    added: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added' }})
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandVideoInteractions:
    page: OnDemandVideoInteractionsPage = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    

@dataclass_json
@dataclass
class OnDemandVideoMetadataConnectionsSeason:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandVideoMetadataConnections:
    season: OnDemandVideoMetadataConnectionsSeason = field(default=None, metadata={'dataclasses_json': { 'field_name': 'season' }})
    

@dataclass_json
@dataclass
class OnDemandVideoMetadataInteractionsLikes:
    added: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added' }})
    added_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added_time' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandVideoMetadataInteractionsWatchlater:
    added: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added' }})
    added_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added_time' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandVideoMetadataInteractions:
    likes: OnDemandVideoMetadataInteractionsLikes = field(default=None, metadata={'dataclasses_json': { 'field_name': 'likes' }})
    watchlater: OnDemandVideoMetadataInteractionsWatchlater = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watchlater' }})
    

@dataclass_json
@dataclass
class OnDemandVideoMetadata:
    connections: OnDemandVideoMetadataConnections = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connections' }})
    interactions: OnDemandVideoMetadataInteractions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interactions' }})
    

@dataclass_json
@dataclass
class OnDemandVideoRent:
    active: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    price: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    purchased: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchased' }})
    
class OnDemandVideoTypeEnum(str, Enum):
    EXTRA = "extra"
    MAIN = "main"
    TRAILER = "trailer"


@dataclass_json
@dataclass
class OnDemandVideo:
    buy: OnDemandVideoBuy = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buy' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    episode: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'episode' }})
    interactions: OnDemandVideoInteractions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interactions' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    metadata: OnDemandVideoMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    pictures: Optional[picture.Picture] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pictures' }})
    play_progress: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'play_progress' }})
    position: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    release_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'release_date' }})
    release_year: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'release_year' }})
    rent: OnDemandVideoRent = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rent' }})
    type: OnDemandVideoTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    user: Optional[user.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
