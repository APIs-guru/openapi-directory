from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import call_feedback_enum_issues_enum


@dataclass_json
@dataclass
class APIV2010AccountCallCallFeedback:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created' }})
    date_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated' }})
    issues: Optional[List[call_feedback_enum_issues_enum.CallFeedbackEnumIssuesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issues' }})
    quality_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quality_score' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    
