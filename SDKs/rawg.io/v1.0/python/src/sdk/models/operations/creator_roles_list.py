from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreatorRolesListQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class CreatorRolesListRequest:
    query_params: CreatorRolesListQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class CreatorRolesList200ApplicationJSON:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    results: List[shared.Position] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class CreatorRolesListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    creator_roles_list_200_application_json_object: Optional[CreatorRolesList200ApplicationJSON] = field(default=None)
    
