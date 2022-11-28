from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CategoriesResponseData:
    category_groups: List[CategoryGroupWithCategories] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category_groups') }})
    server_knowledge: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_knowledge') }})
    

@dataclass_json
@dataclass
class CategoriesResponse:
    data: CategoriesResponseData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
