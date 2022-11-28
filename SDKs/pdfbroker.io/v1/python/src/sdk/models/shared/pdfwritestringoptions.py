from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PdfWriteStringOptionsInput:
    r"""PdfWriteStringOptionsInput
    Options for writing string in pdf page;
    """
    
    font: Optional[FontDtoInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Font') }})
    page_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PageNumber') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Text') }})
    x_origin: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('XOrigin') }})
    x_position: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('XPosition') }})
    y_origin: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('YOrigin') }})
    y_position: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('YPosition') }})
    
