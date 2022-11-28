from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InsightsV1CallAnnotation:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    answered_by: Optional[AnnotationEnumAnsweredByEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answered_by') }})
    call_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('call_score') }})
    call_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('call_sid') }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    connectivity_issue: Optional[AnnotationEnumConnectivityIssueEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectivity_issue') }})
    incident: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('incident') }})
    quality_issues: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quality_issues') }})
    spam: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spam') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
