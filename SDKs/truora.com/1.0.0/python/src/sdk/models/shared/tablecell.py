from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TableCell:
    r"""TableCell
    Represents a table cell
    """
    
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
