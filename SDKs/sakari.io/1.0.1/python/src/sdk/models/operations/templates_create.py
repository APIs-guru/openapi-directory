from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TemplatesCreatePathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class TemplatesCreateSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class TemplatesCreateRequest:
    path_params: TemplatesCreatePathParams = field()
    security: TemplatesCreateSecurity = field()
    request: Optional[shared.TemplateRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TemplatesCreateResponse:
    content_type: str = field()
    status_code: int = field()
    templates_response: Optional[shared.TemplatesResponse] = field(default=None)
    
