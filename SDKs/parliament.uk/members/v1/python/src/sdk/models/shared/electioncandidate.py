from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ElectionCandidate:
    member_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    party: Optional[Party] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('party') }})
    rank_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rankOrder') }})
    result_change: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resultChange') }})
    vote_share: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voteShare') }})
    votes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('votes') }})
    
