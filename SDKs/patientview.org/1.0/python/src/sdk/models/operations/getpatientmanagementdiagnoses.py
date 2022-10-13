from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPatientManagementDiagnosesResponse:
    codes: Optional[List[shared.Code]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
