from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OnDemandGenreInteractionsPage:
    added: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added' }})
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandGenreInteractions:
    page: OnDemandGenreInteractionsPage = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    

@dataclass_json
@dataclass
class OnDemandGenreMetadataConnectionsPages:
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandGenreMetadataConnections:
    pages: OnDemandGenreMetadataConnectionsPages = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    

@dataclass_json
@dataclass
class OnDemandGenreMetadata:
    connections: OnDemandGenreMetadataConnections = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connections' }})
    

@dataclass_json
@dataclass
class OnDemandGenre:
    canonical: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canonical' }})
    interactions: OnDemandGenreInteractions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interactions' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    metadata: OnDemandGenreMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
