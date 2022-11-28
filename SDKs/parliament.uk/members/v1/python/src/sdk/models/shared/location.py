from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Location:
    child_contexts: Optional[List[LocationContext]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childContexts') }})
    context: Optional[LocationContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    parent_context: Optional[LocationContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentContext') }})
    state_of_the_parties: Optional[List[PartySeatCount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateOfTheParties') }})
    
