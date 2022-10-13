from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TagMetadataConnectionsVideos:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class TagMetadataConnections:
    videos: TagMetadataConnectionsVideos = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videos' }})
    

@dataclass_json
@dataclass
class TagMetadata:
    connections: TagMetadataConnections = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connections' }})
    

@dataclass_json
@dataclass
class Tag:
    canonical: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canonical' }})
    metadata: TagMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_key' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
