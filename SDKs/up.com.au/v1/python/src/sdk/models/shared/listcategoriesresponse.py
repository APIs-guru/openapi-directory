from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import categoryresource


@dataclass_json
@dataclass
class ListCategoriesResponse:
    data: List[categoryresource.CategoryResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
