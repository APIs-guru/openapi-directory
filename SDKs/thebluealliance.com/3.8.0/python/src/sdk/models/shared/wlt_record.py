from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WltRecord:
    r"""WltRecord
    A Win-Loss-Tie record for a team, or an alliance.
    """
    
    losses: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('losses') }})
    ties: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ties') }})
    wins: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('wins') }})
    
