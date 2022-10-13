from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import achclass_enum
from . import banktransfernetwork_enum
from . import banktransfertype_enum


@dataclass_json
@dataclass
class ProcessorBankTransferCreateRequest:
    ach_class: Optional[achclass_enum.AchClassEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ach_class' }})
    amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    custom_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_tag' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    idempotency_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotency_key' }})
    iso_currency_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iso_currency_code' }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    network: banktransfernetwork_enum.BankTransferNetworkEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    origination_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'origination_account_id' }})
    processor_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processor_token' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    type: banktransfertype_enum.BankTransferTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    user: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
