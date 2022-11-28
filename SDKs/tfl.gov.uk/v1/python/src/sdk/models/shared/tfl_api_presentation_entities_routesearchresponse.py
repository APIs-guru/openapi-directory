from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesRouteSearchResponse:
    input: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('input') }})
    search_matches: Optional[List[TflAPIPresentationEntitiesRouteSearchMatch]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchMatches') }})
    
