from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreatePayee2Input:
    address: CreatePayeeAddress2 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    remote_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteId') }})
    type: PayeeTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    challenge: Optional[Challenge2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('challenge') }})
    company: Optional[Company2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company') }})
    individual: Optional[CreateIndividual2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('individual') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    payment_channel: Optional[CreatePaymentChannel2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentChannel') }})
    
