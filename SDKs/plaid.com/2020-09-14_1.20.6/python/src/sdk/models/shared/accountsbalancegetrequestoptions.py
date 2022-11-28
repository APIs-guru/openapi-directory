from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AccountsBalanceGetRequestOptions:
    r"""AccountsBalanceGetRequestOptions
    An optional object to filter `/accounts/balance/get` results.
    """
    
    account_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_ids') }})
    min_last_updated_datetime: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('min_last_updated_datetime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
