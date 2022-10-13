from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Part:
    include_in_multiple: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeInMultiple' }})
    price_den: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceDen' }})
    price_num: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceNum' }})
    price_type: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceType' }})
    selection_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectionId' }})
    
