from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TemplatesFetchAllPathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class TemplatesFetchAllQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class TemplatesFetchAllSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class TemplatesFetchAllRequest:
    path_params: TemplatesFetchAllPathParams = field()
    query_params: TemplatesFetchAllQueryParams = field()
    security: TemplatesFetchAllSecurity = field()
    

@dataclass
class TemplatesFetchAllResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    templates_response: Optional[shared.TemplatesResponse] = field(default=None)
    
