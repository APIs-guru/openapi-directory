from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DirectDepositAdditionalDirectDeposit:
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountNumber' }})
    account_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountType' }})
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    amount_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amountType' }})
    block_special: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockSpecial' }})
    is_skip_pre_note: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSkipPreNote' }})
    name_on_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nameOnAccount' }})
    pre_note_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preNoteDate' }})
    routing_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routingNumber' }})
    

@dataclass_json
@dataclass
class DirectDepositMainDirectDeposit:
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountNumber' }})
    account_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountType' }})
    block_special: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockSpecial' }})
    is_skip_pre_note: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSkipPreNote' }})
    name_on_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nameOnAccount' }})
    pre_note_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preNoteDate' }})
    routing_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routingNumber' }})
    

@dataclass_json
@dataclass
class DirectDeposit:
    additional_direct_deposit: Optional[List[DirectDepositAdditionalDirectDeposit]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalDirectDeposit' }})
    main_direct_deposit: Optional[DirectDepositMainDirectDeposit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mainDirectDeposit' }})
    
