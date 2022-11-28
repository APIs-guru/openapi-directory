from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAPIReferenceDepartmentsQueryParams:
    id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    name_contains: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nameContains', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIReferenceDepartmentsRequest:
    query_params: GetAPIReferenceDepartmentsQueryParams = field()
    

@dataclass
class GetAPIReferenceDepartmentsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    government_departments: Optional[List[shared.GovernmentDepartment]] = field(default=None)
    
