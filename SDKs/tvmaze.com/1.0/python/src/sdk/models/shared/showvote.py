from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ShowVote:
    show_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_id') }})
    vote: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vote') }})
    voted_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voted_at') }})
    

@dataclass_json
@dataclass
class ShowVoteInput:
    vote: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vote') }})
    
