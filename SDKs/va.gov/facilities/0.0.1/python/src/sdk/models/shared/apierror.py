from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import errormessage


@dataclass_json
@dataclass
class APIError:
    errors: List[errormessage.ErrorMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
