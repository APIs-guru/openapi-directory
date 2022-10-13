from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import party


@dataclass_json
@dataclass
class ElectionCandidate:
    member_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    party: Optional[party.Party] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'party' }})
    rank_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rankOrder' }})
    result_change: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resultChange' }})
    vote_share: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voteShare' }})
    votes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'votes' }})
    
