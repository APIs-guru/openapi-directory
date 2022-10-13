from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import banktransfereventtype_enum

class BankTransferEventListRequestBankTransferTypeBankTransferTypeEnum(str, Enum):
    DEBIT = "debit"
    CREDIT = "credit"

class BankTransferEventListRequestDirectionBankTransferDirectionEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"


@dataclass_json
@dataclass
class BankTransferEventListRequest:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    bank_transfer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bank_transfer_id' }})
    bank_transfer_type: Optional[BankTransferEventListRequestBankTransferTypeBankTransferTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bank_transfer_type' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    direction: Optional[BankTransferEventListRequestDirectionBankTransferDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_types: Optional[List[banktransfereventtype_enum.BankTransferEventTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_types' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    origination_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'origination_account_id' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
