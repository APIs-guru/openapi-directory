from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class CampaignsRemovePathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    campaign_id: str = field(default=None, metadata={'path_param': { 'field_name': 'campaignId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CampaignsRemoveSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CampaignsRemoveRequest:
    path_params: CampaignsRemovePathParams = field(default=None)
    security: CampaignsRemoveSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CampaignsRemove200ApplicationJSON:
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    

@dataclass
class CampaignsRemoveResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    campaigns_remove_200_application_json_object: Optional[CampaignsRemove200ApplicationJSON] = field(default=None)
    
