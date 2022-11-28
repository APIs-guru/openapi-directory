from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GenericProblem:
    r"""GenericProblem
    A generic problem with no additional information beyond that provided by the HTTP status code.
    """
    
    detail: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    status: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
