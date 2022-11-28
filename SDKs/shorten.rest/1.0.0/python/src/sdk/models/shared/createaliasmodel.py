from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateAliasModel:
    destinations: Optional[List[DestinationModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinations') }})
    metatags: Optional[List[MetaTagModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metatags') }})
    snippets: Optional[List[SnippetModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippets') }})
    
