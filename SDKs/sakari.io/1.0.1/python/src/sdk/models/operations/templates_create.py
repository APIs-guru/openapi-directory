from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TemplatesCreatePathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class TemplatesCreateSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class TemplatesCreateRequest:
    path_params: TemplatesCreatePathParams = field(default=None)
    request: Optional[shared.TemplateRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: TemplatesCreateSecurity = field(default=None)
    

@dataclass
class TemplatesCreateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    templates_response: Optional[shared.TemplatesResponse] = field(default=None)
    
