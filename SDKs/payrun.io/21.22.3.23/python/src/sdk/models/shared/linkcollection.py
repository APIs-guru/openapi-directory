from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LinkCollectionLinkCollectionLink:
    r"""LinkCollectionLinkCollectionLink
    The link collections' links
    """
    
    link: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Link') }})
    

@dataclass_json
@dataclass
class LinkCollectionLinkCollection:
    links: Optional[LinkCollectionLinkCollectionLink] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Links') }})
    

@dataclass_json
@dataclass
class LinkCollection:
    link_collection: Optional[LinkCollectionLinkCollection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LinkCollection') }})
    
