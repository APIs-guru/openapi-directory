from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateOrganizationSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateOrganizationRequest:
    request: shared.OrgOptions = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateOrganizationSecurity = field()
    

@dataclass
class UpdateOrganizationResponse:
    content_type: str = field()
    status_code: int = field()
    organization: Optional[shared.Organization] = field(default=None)
    
