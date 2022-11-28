from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OnDemandGenreInteractionsPage:
    r"""OnDemandGenreInteractionsPage
    Interactions for On Demand pages that are in this genre.
    """
    
    added: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandGenreInteractions:
    page: OnDemandGenreInteractionsPage = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    

@dataclass_json
@dataclass
class OnDemandGenreMetadataConnectionsPages:
    r"""OnDemandGenreMetadataConnectionsPages
    Information about the On Demand pages related to this group.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandGenreMetadataConnections:
    r"""OnDemandGenreMetadataConnections
    A collection of information connected to this resource.
    """
    
    pages: OnDemandGenreMetadataConnectionsPages = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    

@dataclass_json
@dataclass
class OnDemandGenreMetadata:
    connections: OnDemandGenreMetadataConnections = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    

@dataclass_json
@dataclass
class OnDemandGenre:
    canonical: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('canonical') }})
    interactions: OnDemandGenreInteractions = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    metadata: OnDemandGenreMetadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
