from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AccountsBalanceGetRequestOptions:
    account_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_ids' }})
    min_last_updated_datetime: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'min_last_updated_datetime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
