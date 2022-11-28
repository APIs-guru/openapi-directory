from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class TemplatesUpdatePathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    template_id: str = field(metadata={'path_param': { 'field_name': 'templateId', 'style': 'simple', 'explode': False }})
    

@dataclass
class TemplatesUpdateSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class TemplatesUpdateRequest:
    path_params: TemplatesUpdatePathParams = field()
    security: TemplatesUpdateSecurity = field()
    

@dataclass
class TemplatesUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    template_response: Optional[shared.TemplateResponse] = field(default=None)
    
