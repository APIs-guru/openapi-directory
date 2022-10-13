from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import locationcontext
from . import locationcontext
from . import locationcontext
from . import partyseatcount


@dataclass_json
@dataclass
class Location:
    child_contexts: Optional[List[locationcontext.LocationContext]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childContexts' }})
    context: Optional[locationcontext.LocationContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    parent_context: Optional[locationcontext.LocationContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentContext' }})
    state_of_the_parties: Optional[List[partyseatcount.PartySeatCount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateOfTheParties' }})
    
