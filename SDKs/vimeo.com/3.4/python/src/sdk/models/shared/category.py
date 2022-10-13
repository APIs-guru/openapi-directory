from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import picture
from . import picture


@dataclass_json
@dataclass
class CategoryMetadataConnectionsChannels:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class CategoryMetadataConnectionsGroups:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class CategoryMetadataConnectionsUsers:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class CategoryMetadataConnectionsVideos:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class CategoryMetadataConnections:
    channels: CategoryMetadataConnectionsChannels = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channels' }})
    groups: CategoryMetadataConnectionsGroups = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    users: CategoryMetadataConnectionsUsers = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    videos: CategoryMetadataConnectionsVideos = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videos' }})
    

@dataclass_json
@dataclass
class CategoryMetadataInteractionsFollow:
    added: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added' }})
    added_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added_time' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class CategoryMetadataInteractions:
    follow: CategoryMetadataInteractionsFollow = field(default=None, metadata={'dataclasses_json': { 'field_name': 'follow' }})
    

@dataclass_json
@dataclass
class CategoryMetadata:
    connections: CategoryMetadataConnections = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connections' }})
    interactions: CategoryMetadataInteractions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interactions' }})
    

@dataclass_json
@dataclass
class CategoryParent:
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class CategorySubcategories:
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class Category:
    icon: Optional[picture.Picture] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icon' }})
    last_video_featured_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_video_featured_time' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    metadata: CategoryMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent: CategoryParent = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    pictures: picture.Picture = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pictures' }})
    resource_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_key' }})
    subcategories: Optional[List[CategorySubcategories]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subcategories' }})
    top_level: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'top_level' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
