from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UsersHalResponse:
    embedded: Optional[UsersEmbeddedObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_embedded') }})
    links: Optional[Links] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    page: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    total_items: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_items') }})
    total_pages: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_pages') }})
    
