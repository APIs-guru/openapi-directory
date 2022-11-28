from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProjectMetadataConnectionsVideos:
    r"""ProjectMetadataConnectionsVideos
    A standard connection object indicating how to get all the videos in this project.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class ProjectMetadataConnections:
    r"""ProjectMetadataConnections
    A list of resource URIs related to the project.
    """
    
    videos: ProjectMetadataConnectionsVideos = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclass_json
@dataclass
class ProjectMetadata:
    r"""ProjectMetadata
    The project's metadata.
    """
    
    connections: ProjectMetadataConnections = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    

@dataclass_json
@dataclass
class Project:
    created_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    metadata: ProjectMetadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    modified_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified_time') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    user: User = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
