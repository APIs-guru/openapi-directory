from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TestDto:
    r"""TestDto
    The TestDTO Class.
    Contains relevant fields of Test DTO by masking actual Test entity's fields in application.
                
    """
    
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
