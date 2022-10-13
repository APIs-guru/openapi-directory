from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TemplatesFetchPathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    template_id: str = field(default=None, metadata={'path_param': { 'field_name': 'templateId', 'style': 'simple', 'explode': False }})
    

@dataclass
class TemplatesFetchSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class TemplatesFetchRequest:
    path_params: TemplatesFetchPathParams = field(default=None)
    security: TemplatesFetchSecurity = field(default=None)
    

@dataclass
class TemplatesFetchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    template_response: Optional[shared.TemplateResponse] = field(default=None)
    
