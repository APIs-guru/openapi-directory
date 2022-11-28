from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetOrganizationSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetOrganizationRequest:
    security: GetOrganizationSecurity = field()
    

@dataclass
class GetOrganizationResponse:
    content_type: str = field()
    status_code: int = field()
    organization: Optional[shared.Organization] = field(default=None)
    
