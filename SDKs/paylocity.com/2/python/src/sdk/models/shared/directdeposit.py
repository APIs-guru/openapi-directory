from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DirectDepositAdditionalDirectDeposit:
    r"""DirectDepositAdditionalDirectDeposit
    The additional direct deposit model
    """
    
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountNumber') }})
    account_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountType') }})
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    amount_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountType') }})
    block_special: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockSpecial') }})
    is_skip_pre_note: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSkipPreNote') }})
    name_on_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameOnAccount') }})
    pre_note_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preNoteDate') }})
    routing_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routingNumber') }})
    

@dataclass_json
@dataclass
class DirectDepositMainDirectDeposit:
    r"""DirectDepositMainDirectDeposit
    The main Direct Deposit account.
    """
    
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountNumber') }})
    account_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountType') }})
    block_special: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockSpecial') }})
    is_skip_pre_note: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSkipPreNote') }})
    name_on_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameOnAccount') }})
    pre_note_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preNoteDate') }})
    routing_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routingNumber') }})
    

@dataclass_json
@dataclass
class DirectDeposit:
    r"""DirectDeposit
    The Direct Deposit model
    """
    
    additional_direct_deposit: Optional[List[DirectDepositAdditionalDirectDeposit]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalDirectDeposit') }})
    main_direct_deposit: Optional[DirectDepositMainDirectDeposit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainDirectDeposit') }})
    
