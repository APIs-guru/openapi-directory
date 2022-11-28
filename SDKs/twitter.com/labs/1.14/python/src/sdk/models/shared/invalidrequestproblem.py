from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InvalidRequestProblemErrors:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    parameters: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    

@dataclass_json
@dataclass
class InvalidRequestProblem:
    r"""InvalidRequestProblem
    A problem that indicates this request is invalid.
    """
    
    detail: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    errors: Optional[List[InvalidRequestProblemErrors]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    
