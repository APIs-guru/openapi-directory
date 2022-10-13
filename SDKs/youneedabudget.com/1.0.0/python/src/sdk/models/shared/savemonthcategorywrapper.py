from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import savemonthcategory


@dataclass_json
@dataclass
class SaveMonthCategoryWrapper:
    category: savemonthcategory.SaveMonthCategory = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    
