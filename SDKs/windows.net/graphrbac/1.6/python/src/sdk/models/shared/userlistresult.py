from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UserListResult:
    r"""UserListResult
    Server response for Get tenant users API call.
    """
    
    odata_next_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('odata.nextLink') }})
    value: Optional[List[dict[str, dict[str, Any]]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
