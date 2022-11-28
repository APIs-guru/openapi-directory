from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateDistributionLinks:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    expiration_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationDate') }})
    link_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkType') }})
    mailing_list_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mailingListId') }})
    survey_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('surveyId') }})
    
