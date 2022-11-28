from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FreeBetDetail:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    offer_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerName') }})
    value: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    award_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awardDateTime') }})
    display_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayText') }})
    expiry_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiryDateTime') }})
    offer_desc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerDesc') }})
    offer_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerId') }})
    start_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDateTime') }})
    
