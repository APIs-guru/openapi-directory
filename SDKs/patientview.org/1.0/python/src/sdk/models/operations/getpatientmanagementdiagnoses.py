from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPatientManagementDiagnosesResponse:
    content_type: str = field()
    status_code: int = field()
    codes: Optional[List[shared.Code]] = field(default=None)
    
