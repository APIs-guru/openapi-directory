from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class FundingAuditFundingTypeEnum(str, Enum):
    ACH = "ACH"
    WIRE = "WIRE"
    EMBEDDED = "EMBEDDED"

class FundingAuditStatusEnum(str, Enum):
    PENDING = "PENDING"
    FAILED = "FAILED"
    CREDIT = "CREDIT"
    DEBIT = "DEBIT"

class FundingAuditTopupTypeEnum(str, Enum):
    AUTOMATIC = "AUTOMATIC"
    MANUAL = "MANUAL"


@dataclass_json
@dataclass
class FundingAudit:
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    events: Optional[List[FundingEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    funding_account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fundingAccountName') }})
    funding_type: Optional[FundingAuditFundingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fundingType') }})
    source_account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceAccountName') }})
    status: Optional[FundingAuditStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    topup_type: Optional[FundingAuditTopupTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topupType') }})
    
