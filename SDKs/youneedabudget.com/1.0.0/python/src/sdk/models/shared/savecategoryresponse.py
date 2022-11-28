from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SaveCategoryResponseData:
    category: Category = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    server_knowledge: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_knowledge') }})
    

@dataclass_json
@dataclass
class SaveCategoryResponse:
    data: SaveCategoryResponseData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
