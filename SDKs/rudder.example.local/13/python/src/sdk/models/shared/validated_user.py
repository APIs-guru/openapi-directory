from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ValidatedUser:
    r"""ValidatedUser
    list of users with their workflow settings
    """
    
    is_validated: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isValidated') }})
    user_exists: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userExists') }})
    username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
