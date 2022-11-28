from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAPIPostsDepartmentsTypePathParams:
    type: int = field(metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIPostsDepartmentsTypeRequest:
    path_params: GetAPIPostsDepartmentsTypePathParams = field()
    

@dataclass
class GetAPIPostsDepartmentsTypeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    government_departments: Optional[List[shared.GovernmentDepartment]] = field(default=None)
    
