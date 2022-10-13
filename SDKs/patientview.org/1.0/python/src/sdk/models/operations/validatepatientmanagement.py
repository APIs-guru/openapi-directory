from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ValidatePatientManagementRequest:
    request: Optional[shared.PatientManagement] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ValidatePatientManagementResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
