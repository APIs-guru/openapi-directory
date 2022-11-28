from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class BankTransferEventListRequestBankTransferTypeEnum(str, Enum):
    DEBIT = "debit"
    CREDIT = "credit"

class BankTransferEventListRequestBankTransferDirectionEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"


@dataclass_json
@dataclass
class BankTransferEventListRequest:
    r"""BankTransferEventListRequest
    BankTransferEventListRequest defines the request schema for `/bank_transfer/event/list`
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    bank_transfer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bank_transfer_id') }})
    bank_transfer_type: Optional[BankTransferEventListRequestBankTransferTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bank_transfer_type') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    direction: Optional[BankTransferEventListRequestBankTransferDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_types: Optional[List[BankTransferEventTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_types') }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    origination_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('origination_account_id') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
