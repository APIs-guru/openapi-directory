from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class CampaignsUpdatePathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    campaign_id: str = field(metadata={'path_param': { 'field_name': 'campaignId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CampaignsUpdateSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CampaignsUpdateRequest:
    path_params: CampaignsUpdatePathParams = field()
    security: CampaignsUpdateSecurity = field()
    

@dataclass
class CampaignsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    campaign_response: Optional[shared.CampaignResponse] = field(default=None)
    
