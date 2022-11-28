from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CompanySummary:
    r"""CompanySummary
    Represents the summary of a company background check
    """
    
    names_found: Optional[List[NameFound]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('names_found') }})
    
