from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateAccountOrganizationSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateAccountOrganizationRequest:
    request: shared.OrgOptions = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateAccountOrganizationSecurity = field(default=None)
    

@dataclass
class CreateAccountOrganizationResponse:
    content_type: str = field(default=None)
    organization: Optional[shared.Organization] = field(default=None)
    status_code: int = field(default=None)
    
