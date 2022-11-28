from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OnDemandPromotionCode:
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    max_uses: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_uses') }})
    uses: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uses') }})
    
