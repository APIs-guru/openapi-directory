from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PayeeUserSelfUpdateRequest:
    r"""PayeeUserSelfUpdateRequest
    <p>All properties are optional</p>
    <p>Only provided properties will be updated</p>
    <p>Use null to null out a property that is allowed to be nullable</p>
    
    """
    
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    primary_contact_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryContactNumber') }})
    secondary_contact_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryContactNumber') }})
    sms_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smsNumber') }})
    
