from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import categoryresource


@dataclass_json
@dataclass
class GetCategoryResponse:
    data: categoryresource.CategoryResource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
