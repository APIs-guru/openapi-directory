from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAPIReferenceDepartmentsQueryParams:
    id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    name_contains: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nameContains', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIReferenceDepartmentsRequest:
    query_params: GetAPIReferenceDepartmentsQueryParams = field(default=None)
    

@dataclass
class GetAPIReferenceDepartmentsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    government_departments: Optional[List[shared.GovernmentDepartment]] = field(default=None)
    status_code: int = field(default=None)
    
