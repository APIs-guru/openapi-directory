from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate:
    update_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update_count') }})
    update_request: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update_request') }})
    
