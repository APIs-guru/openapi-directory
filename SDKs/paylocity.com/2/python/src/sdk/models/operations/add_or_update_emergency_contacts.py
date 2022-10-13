from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AddOrUpdateEmergencyContactsPathParams:
    company_id: str = field(default=None, metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    employee_id: str = field(default=None, metadata={'path_param': { 'field_name': 'employeeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddOrUpdateEmergencyContactsSecurity:
    paylocity_auth: shared.SchemePaylocityAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddOrUpdateEmergencyContactsRequest:
    path_params: AddOrUpdateEmergencyContactsPathParams = field(default=None)
    request: shared.EmergencyContact = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AddOrUpdateEmergencyContactsSecurity = field(default=None)
    

@dataclass
class AddOrUpdateEmergencyContactsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    errors: Optional[List[shared.Error]] = field(default=None)
    
