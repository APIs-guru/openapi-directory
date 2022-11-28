from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TemplatesFetchPathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    template_id: str = field(metadata={'path_param': { 'field_name': 'templateId', 'style': 'simple', 'explode': False }})
    

@dataclass
class TemplatesFetchSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class TemplatesFetchRequest:
    path_params: TemplatesFetchPathParams = field()
    security: TemplatesFetchSecurity = field()
    

@dataclass
class TemplatesFetchResponse:
    content_type: str = field()
    status_code: int = field()
    template_response: Optional[shared.TemplateResponse] = field(default=None)
    
