from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Table:
    r"""Table
    Represents a table to lay out search results
    """
    
    rows: List[TableRow] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
