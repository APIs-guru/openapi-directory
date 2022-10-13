from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CreateReportModelReportTypeEnum(str, Enum):
    MALICIOUS_IP = "MaliciousIP"
    SPAMMING = "Spamming"
    REMOVE_PERMISSIONS = "RemovePermissions"
    OTHER = "Other"


@dataclass_json
@dataclass
class CreateReportModel:
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }, 'form': { 'field_name': 'reason' }})
    report_type: Optional[CreateReportModelReportTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportType' }, 'form': { 'field_name': 'reportType' }})
    
