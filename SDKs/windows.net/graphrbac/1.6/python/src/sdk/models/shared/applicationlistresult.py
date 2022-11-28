from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ApplicationListResult:
    r"""ApplicationListResult
    Application list operation result.
    """
    
    odata_next_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('odata.nextLink') }})
    value: Optional[List[dict[str, dict[str, Any]]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
