from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PaymentChannelRule:
    r"""PaymentChannelRule
    Rules that will get applied when creating or updating a payment channel for the given country
    """
    
    display_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    element: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('element') }})
    required: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    validation: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('validation') }})
    display_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayOrder') }})
    max_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxLength') }})
    min_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minLength') }})
    
