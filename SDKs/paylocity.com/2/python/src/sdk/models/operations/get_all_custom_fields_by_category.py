from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAllCustomFieldsByCategoryPathParams:
    category: str = field(default=None, metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    company_id: str = field(default=None, metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllCustomFieldsByCategorySecurity:
    paylocity_auth: shared.SchemePaylocityAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAllCustomFieldsByCategoryRequest:
    path_params: GetAllCustomFieldsByCategoryPathParams = field(default=None)
    security: GetAllCustomFieldsByCategorySecurity = field(default=None)
    

@dataclass
class GetAllCustomFieldsByCategoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    custom_field_definitions: Optional[List[shared.CustomFieldDefinition]] = field(default=None)
    errors: Optional[List[shared.Error]] = field(default=None)
    
