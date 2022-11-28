from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCompanyEmployeesResponse:
    content_type: str = field()
    status_code: int = field()
    employees_response: Optional[shared.EmployeesResponse] = field(default=None)
    
