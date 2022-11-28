from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CategoryGroupWithCategories:
    categories: List[Category] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    deleted: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    hidden: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hidden') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
