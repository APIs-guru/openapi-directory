from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LinkCollectionLinkCollectionLinksLink:
    link: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Link' }})
    

@dataclass_json
@dataclass
class LinkCollectionLinkCollectionLinkCollection:
    links: Optional[LinkCollectionLinkCollectionLinksLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Links' }})
    

@dataclass_json
@dataclass
class LinkCollection:
    link_collection: Optional[LinkCollectionLinkCollectionLinkCollection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LinkCollection' }})
    
