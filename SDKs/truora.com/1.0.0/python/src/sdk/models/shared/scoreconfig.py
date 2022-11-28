from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ScoreConfig:
    r"""ScoreConfig
    Represents a set of configurations to determine the background check score
    """
    
    data_set: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_set') }})
    weight: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    
