from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Timezone:
    r"""Timezone
    Timezone information of the node.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    offset: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    
