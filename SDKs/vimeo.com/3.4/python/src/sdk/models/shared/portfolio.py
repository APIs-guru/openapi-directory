from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PortfolioMetadataConnectionsVideos:
    r"""PortfolioMetadataConnectionsVideos
    Information about the videos contained within this portfolio.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class PortfolioMetadataConnections:
    r"""PortfolioMetadataConnections
    A list of resource URIs related to the album.
    """
    
    videos: PortfolioMetadataConnectionsVideos = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclass_json
@dataclass
class PortfolioMetadata:
    r"""PortfolioMetadata
    Metadata about the album.
    """
    
    connections: PortfolioMetadataConnections = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    
class PortfolioSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    CLIPS = "clips"
    MODIFIED = "modified"
    RECENT = "recent"


@dataclass_json
@dataclass
class Portfolio:
    created_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    metadata: PortfolioMetadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    modified_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified_time') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    sort: PortfolioSortEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sort') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
