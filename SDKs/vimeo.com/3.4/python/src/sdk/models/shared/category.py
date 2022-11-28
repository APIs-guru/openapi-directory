from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CategoryMetadataConnectionsChannels:
    r"""CategoryMetadataConnectionsChannels
    Information about the channels related to this category.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class CategoryMetadataConnectionsGroups:
    r"""CategoryMetadataConnectionsGroups
    Information about the groups related to this category.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class CategoryMetadataConnectionsUsers:
    r"""CategoryMetadataConnectionsUsers
    Information about the users related to this category.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class CategoryMetadataConnectionsVideos:
    r"""CategoryMetadataConnectionsVideos
    Information about the videos related to this category.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class CategoryMetadataConnections:
    r"""CategoryMetadataConnections
    A collection of information that is connected to this resource.
    """
    
    channels: CategoryMetadataConnectionsChannels = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    groups: CategoryMetadataConnectionsGroups = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    users: CategoryMetadataConnectionsUsers = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    videos: CategoryMetadataConnectionsVideos = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclass_json
@dataclass
class CategoryMetadataInteractionsFollow:
    r"""CategoryMetadataInteractionsFollow
    An action indicating if the authenticated user has followed this category.
    """
    
    added: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_time') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class CategoryMetadataInteractions:
    r"""CategoryMetadataInteractions
    The permissible actions related to the category.
    """
    
    follow: CategoryMetadataInteractionsFollow = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('follow') }})
    

@dataclass_json
@dataclass
class CategoryMetadata:
    r"""CategoryMetadata
    Metadata about the category.
    """
    
    connections: CategoryMetadataConnections = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    interactions: CategoryMetadataInteractions = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    

@dataclass_json
@dataclass
class CategoryParent:
    r"""CategoryParent
    The container of this category's parent category, if the current category is a subcategory.
    """
    
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class CategorySubcategories:
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class Category:
    last_video_featured_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_video_featured_time') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    metadata: CategoryMetadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent: CategoryParent = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    pictures: Picture = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    resource_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    top_level: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('top_level') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    icon: Optional[Picture] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icon') }})
    subcategories: Optional[List[CategorySubcategories]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subcategories') }})
    
