from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateAccountOrganizationPathParams:
    org_id: str = field(metadata={'path_param': { 'field_name': 'org_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAccountOrganizationSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateAccountOrganizationRequest:
    path_params: UpdateAccountOrganizationPathParams = field()
    request: shared.OrgOptions = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateAccountOrganizationSecurity = field()
    

@dataclass
class UpdateAccountOrganizationResponse:
    content_type: str = field()
    status_code: int = field()
    organization: Optional[shared.Organization] = field(default=None)
    
