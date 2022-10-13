from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import category


@dataclass_json
@dataclass
class CategoryResponseData:
    category: category.Category = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    

@dataclass_json
@dataclass
class CategoryResponse:
    data: CategoryResponseData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
