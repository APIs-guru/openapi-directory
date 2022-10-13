from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import categorygroupwithcategories


@dataclass_json
@dataclass
class CategoriesResponseData:
    category_groups: List[categorygroupwithcategories.CategoryGroupWithCategories] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category_groups' }})
    server_knowledge: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server_knowledge' }})
    

@dataclass_json
@dataclass
class CategoriesResponse:
    data: CategoriesResponseData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
