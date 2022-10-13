from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateEmployeeSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateEmployeeRequest:
    request: shared.V1Employee = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateEmployeeSecurity = field(default=None)
    

@dataclass
class CreateEmployeeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    v1_employee: Optional[shared.V1Employee] = field(default=None)
    
