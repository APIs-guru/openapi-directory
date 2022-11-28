from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ErrorResponse:
    r"""ErrorResponse
    Generic error response that returns one or more errors.
    
    """
    
    errors: List[ErrorObject] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    
