from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import destinationmodel
from . import metatagmodel
from . import snippetmodel


@dataclass_json
@dataclass
class CreateAliasModel:
    destinations: Optional[List[destinationmodel.DestinationModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinations' }})
    metatags: Optional[List[metatagmodel.MetaTagModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metatags' }})
    snippets: Optional[List[snippetmodel.SnippetModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snippets' }})
    
