from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Attributes:
    r"""Attributes
    Contains additional attributes related to the task parameter. If the task parameter is table, the row and column IDs for the detected text are returned. If the task parameter is contact, the detected entity tags will be returned.
    """
    
    cell_location: Optional[CellLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cellLocation') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    page_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageNumber') }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    value: Optional[EntityObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
