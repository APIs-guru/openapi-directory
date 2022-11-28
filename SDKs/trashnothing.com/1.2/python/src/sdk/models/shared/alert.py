from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Alert:
    r"""Alert
    A search alert that the user has created so that they can be notified when new posts match the search query specified by the alert.
    """
    
    alert_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alert_id') }})
    last_sent: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_sent'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    search: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('search') }})
    send_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('send_count') }})
    types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('types') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    
