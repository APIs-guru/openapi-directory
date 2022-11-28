from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AddNewEmployeeToWebLinkPathParams:
    company_id: str = field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddNewEmployeeToWebLinkSecurity:
    paylocity_auth: shared.SchemePaylocityAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddNewEmployeeToWebLinkRequest:
    path_params: AddNewEmployeeToWebLinkPathParams = field()
    request: shared.StagedEmployee = field(metadata={'request': { 'media_type': 'application/json' }})
    security: AddNewEmployeeToWebLinkSecurity = field()
    

@dataclass
class AddNewEmployeeToWebLinkResponse:
    content_type: str = field()
    status_code: int = field()
    errors: Optional[List[shared.Error]] = field(default=None)
    tracking_number_responses: Optional[List[shared.TrackingNumberResponse]] = field(default=None)
    
