from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PrepaidBalanceInfo:
    balance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    latest_top_up: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestTopUp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pending_transaction: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pendingTransaction') }})
    
