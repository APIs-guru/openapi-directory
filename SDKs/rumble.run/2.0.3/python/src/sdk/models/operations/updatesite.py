from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateSitePathParams:
    site_id: str = field(metadata={'path_param': { 'field_name': 'site_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSiteSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateSiteRequest:
    path_params: UpdateSitePathParams = field()
    request: shared.SiteOptions = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateSiteSecurity = field()
    

@dataclass
class UpdateSiteResponse:
    content_type: str = field()
    status_code: int = field()
    site: Optional[shared.Site] = field(default=None)
    
