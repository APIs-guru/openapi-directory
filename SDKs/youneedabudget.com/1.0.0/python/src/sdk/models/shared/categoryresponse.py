from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CategoryResponseData:
    category: Category = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    

@dataclass_json
@dataclass
class CategoryResponse:
    data: CategoryResponseData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
