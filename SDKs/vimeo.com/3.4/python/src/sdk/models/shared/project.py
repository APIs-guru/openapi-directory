from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import user


@dataclass_json
@dataclass
class ProjectMetadataConnectionsVideos:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class ProjectMetadataConnections:
    videos: ProjectMetadataConnectionsVideos = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videos' }})
    

@dataclass_json
@dataclass
class ProjectMetadata:
    connections: ProjectMetadataConnections = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connections' }})
    

@dataclass_json
@dataclass
class Project:
    created_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_time' }})
    metadata: ProjectMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    modified_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modified_time' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_key' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    user: user.User = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
