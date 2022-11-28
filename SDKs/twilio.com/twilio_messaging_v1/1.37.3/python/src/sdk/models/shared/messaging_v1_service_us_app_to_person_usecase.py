from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MessagingV1ServiceUsAppToPersonUsecase:
    us_app_to_person_usecases: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('us_app_to_person_usecases') }})
    
