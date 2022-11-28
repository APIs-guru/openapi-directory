from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProcessorBankTransferCreateRequest:
    r"""ProcessorBankTransferCreateRequest
    ProcessorBankTransferCreateRequest defines the request schema for `/processor/bank_transfer/create`
    """
    
    amount: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    idempotency_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('idempotency_key') }})
    iso_currency_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso_currency_code') }})
    network: BankTransferNetworkEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    processor_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('processor_token') }})
    type: BankTransferTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    user: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    ach_class: Optional[AchClassEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ach_class') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    custom_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_tag') }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    origination_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('origination_account_id') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
