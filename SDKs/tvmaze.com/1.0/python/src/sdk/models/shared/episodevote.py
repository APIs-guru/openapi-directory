from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EpisodeVote:
    episode_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('episode_id') }})
    vote: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vote') }})
    voted_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voted_at') }})
    

@dataclass_json
@dataclass
class EpisodeVoteInput:
    vote: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vote') }})
    
