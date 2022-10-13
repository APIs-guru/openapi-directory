from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PortfolioMetadataConnectionsVideos:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class PortfolioMetadataConnections:
    videos: PortfolioMetadataConnectionsVideos = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videos' }})
    

@dataclass_json
@dataclass
class PortfolioMetadata:
    connections: PortfolioMetadataConnections = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connections' }})
    
class PortfolioSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    CLIPS = "clips"
    MODIFIED = "modified"
    RECENT = "recent"


@dataclass_json
@dataclass
class Portfolio:
    created_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_time' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    metadata: PortfolioMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    modified_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modified_time' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    sort: PortfolioSortEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sort' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
