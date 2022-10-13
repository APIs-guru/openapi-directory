from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import destinationmodel
from . import metatagmodel
from . import snippetmodel


@dataclass_json
@dataclass
class AliasModel:
    created_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt' }})
    destinations: Optional[List[destinationmodel.DestinationModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinations' }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainName' }})
    metatags: Optional[List[metatagmodel.MetaTagModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metatags' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    snippets: Optional[List[snippetmodel.SnippetModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snippets' }})
    updated_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt' }})
    
