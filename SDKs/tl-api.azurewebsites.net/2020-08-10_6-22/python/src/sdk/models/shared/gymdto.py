from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GymDto:
    r"""GymDto
    The GymDTO Class.
    Contains relevant fields of Gym DTO by masking actual Gym entity's fields in application.
                
    """
    
    external_gym_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalGymNumber') }})
    gym_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gymId') }})
    gym_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gymName') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    
