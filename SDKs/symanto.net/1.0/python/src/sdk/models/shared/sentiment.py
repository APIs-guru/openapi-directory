from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Sentiment:
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    negation_term: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negationTerm') }})
    parent_category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentCategory') }})
    positive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('positive') }})
    scale: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scale') }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
