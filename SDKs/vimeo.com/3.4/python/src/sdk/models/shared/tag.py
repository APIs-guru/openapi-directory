from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TagMetadataConnectionsVideos:
    r"""TagMetadataConnectionsVideos
    Information about the videos related to this tag.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class TagMetadataConnections:
    r"""TagMetadataConnections
    A collection of information that is connected to this resource.
    """
    
    videos: TagMetadataConnectionsVideos = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclass_json
@dataclass
class TagMetadata:
    r"""TagMetadata
    Metadata about the group.
    """
    
    connections: TagMetadataConnections = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    

@dataclass_json
@dataclass
class Tag:
    canonical: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('canonical') }})
    metadata: TagMetadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
