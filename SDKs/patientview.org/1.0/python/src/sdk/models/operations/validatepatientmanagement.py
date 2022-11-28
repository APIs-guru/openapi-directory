from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ValidatePatientManagementRequest:
    request: Optional[shared.PatientManagement] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ValidatePatientManagementResponse:
    content_type: str = field()
    status_code: int = field()
    
