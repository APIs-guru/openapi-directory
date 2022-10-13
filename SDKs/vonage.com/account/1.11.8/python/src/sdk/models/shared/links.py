from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import firsthref
from . import lasthref
from . import nexthref
from . import prevhref
from . import selfhref


@dataclass_json
@dataclass
class Links:
    first: Optional[firsthref.FirstHref] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first' }})
    last: Optional[lasthref.LastHref] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last' }})
    next: Optional[nexthref.NextHref] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    prev: Optional[prevhref.PrevHref] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prev' }})
    self: Optional[selfhref.SelfHref] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    
