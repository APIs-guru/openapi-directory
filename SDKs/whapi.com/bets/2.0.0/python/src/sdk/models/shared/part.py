from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Part:
    include_in_multiple: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeInMultiple') }})
    price_den: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceDen') }})
    price_num: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceNum') }})
    price_type: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceType') }})
    selection_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectionId') }})
    
