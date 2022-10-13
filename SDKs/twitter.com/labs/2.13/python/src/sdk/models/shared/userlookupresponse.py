from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import genericproblem
from . import invalidrequestproblem
from . import clientforbiddenproblem
from . import resourcenotfoundproblem
from . import resourceunauthorizedproblem
from . import disallowedresourceproblem
from . import unsupportedauthenticationproblem
from . import usagecapexceededproblem
from . import expansions


@dataclass_json
@dataclass
class UserLookupResponse:
    data: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    errors: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    includes: Optional[expansions.Expansions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includes' }})
    
