from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import loyaltyprogram


@dataclass_json
@dataclass
class ListLoyaltyProgramsResponse:
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    programs: Optional[List[loyaltyprogram.LoyaltyProgram]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'programs' }})
    
