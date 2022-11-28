from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwardRecipient:
    r"""AwardRecipient
    An `Award_Recipient` object represents the team and/or person who received an award at an event.
    """
    
    awardee: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awardee') }})
    team_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team_key') }})
    
