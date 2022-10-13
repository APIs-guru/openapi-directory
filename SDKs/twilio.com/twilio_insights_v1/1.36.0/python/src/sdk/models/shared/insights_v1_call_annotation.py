from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import annotation_enum_answered_by_enum
from . import annotation_enum_connectivity_issue_enum


@dataclass_json
@dataclass
class InsightsV1CallAnnotation:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    answered_by: Optional[annotation_enum_answered_by_enum.AnnotationEnumAnsweredByEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answered_by' }})
    call_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'call_score' }})
    call_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'call_sid' }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    connectivity_issue: Optional[annotation_enum_connectivity_issue_enum.AnnotationEnumConnectivityIssueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectivity_issue' }})
    incident: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incident' }})
    quality_issues: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quality_issues' }})
    spam: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spam' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
