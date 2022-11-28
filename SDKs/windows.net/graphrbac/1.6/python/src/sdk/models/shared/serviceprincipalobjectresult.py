from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ServicePrincipalObjectResult:
    r"""ServicePrincipalObjectResult
    Service Principal Object Result.
    """
    
    odata_metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('odata.metadata') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
