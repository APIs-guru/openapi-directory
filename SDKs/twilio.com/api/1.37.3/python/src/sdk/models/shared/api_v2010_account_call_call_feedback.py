from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class APIV2010AccountCallCallFeedback:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_created') }})
    date_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_updated') }})
    issues: Optional[List[CallFeedbackEnumIssuesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issues') }})
    quality_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quality_score') }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sid') }})
    
