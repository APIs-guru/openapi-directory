from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAllCustomFieldsByCategoryPathParams:
    category: str = field(metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    company_id: str = field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllCustomFieldsByCategorySecurity:
    paylocity_auth: shared.SchemePaylocityAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAllCustomFieldsByCategoryRequest:
    path_params: GetAllCustomFieldsByCategoryPathParams = field()
    security: GetAllCustomFieldsByCategorySecurity = field()
    

@dataclass
class GetAllCustomFieldsByCategoryResponse:
    content_type: str = field()
    status_code: int = field()
    custom_field_definitions: Optional[List[shared.CustomFieldDefinition]] = field(default=None)
    errors: Optional[List[shared.Error]] = field(default=None)
    
