from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CampaignsFetchAllPathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CampaignsFetchAllQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class CampaignsFetchAllSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CampaignsFetchAllRequest:
    path_params: CampaignsFetchAllPathParams = field()
    query_params: CampaignsFetchAllQueryParams = field()
    security: CampaignsFetchAllSecurity = field()
    

@dataclass
class CampaignsFetchAllResponse:
    content_type: str = field()
    status_code: int = field()
    campaigns_response: Optional[shared.CampaignsResponse] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
