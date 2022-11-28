from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SurveyMetadata:
    hierarchies: Optional[List[Hierarchy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hierarchies') }})
    interview_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interviewCount') }})
    languages: Optional[List[Language]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    variables: Optional[List[Variable]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variables') }})
    
