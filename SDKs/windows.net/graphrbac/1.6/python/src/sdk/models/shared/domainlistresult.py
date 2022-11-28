from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DomainListResult:
    r"""DomainListResult
    Server response for Get tenant domains API call.
    """
    
    value: Optional[List[dict[str, dict[str, Any]]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
