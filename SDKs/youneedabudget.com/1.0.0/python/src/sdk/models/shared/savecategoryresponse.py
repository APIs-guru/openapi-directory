from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import category


@dataclass_json
@dataclass
class SaveCategoryResponseData:
    category: category.Category = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    server_knowledge: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server_knowledge' }})
    

@dataclass_json
@dataclass
class SaveCategoryResponse:
    data: SaveCategoryResponseData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
