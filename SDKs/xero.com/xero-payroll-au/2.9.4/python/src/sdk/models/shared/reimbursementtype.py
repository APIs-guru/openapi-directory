from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReimbursementType:
    account_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountCode') }})
    current_record: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentRecord') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    reimbursement_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReimbursementTypeID') }})
    updated_date_utc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedDateUTC') }})
    

@dataclass_json
@dataclass
class ReimbursementTypeInput:
    account_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountCode') }})
    current_record: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentRecord') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    reimbursement_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReimbursementTypeID') }})
    
