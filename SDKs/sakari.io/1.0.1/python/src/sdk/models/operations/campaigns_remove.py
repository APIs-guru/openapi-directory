from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CampaignsRemovePathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    campaign_id: str = field(metadata={'path_param': { 'field_name': 'campaignId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CampaignsRemoveSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class CampaignsRemove200ApplicationJSON:
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    

@dataclass
class CampaignsRemoveRequest:
    path_params: CampaignsRemovePathParams = field()
    security: CampaignsRemoveSecurity = field()
    

@dataclass
class CampaignsRemoveResponse:
    content_type: str = field()
    status_code: int = field()
    campaigns_remove_200_application_json_object: Optional[CampaignsRemove200ApplicationJSON] = field(default=None)
    
