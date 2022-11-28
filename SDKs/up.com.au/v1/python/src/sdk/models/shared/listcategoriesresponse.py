from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListCategoriesResponse:
    r"""ListCategoriesResponse
    Successful response to get all categories and their ancestry. The
    returned list is not paginated.
    
    """
    
    data: List[CategoryResource] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
