from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ViewSystemsAdvisoriesSecurity:
    rh_identity: shared.SchemeRhIdentity = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ViewSystemsAdvisoriesRequest:
    request: shared.ControllersSystemsAdvisoriesRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: ViewSystemsAdvisoriesSecurity = field(default=None)
    

@dataclass
class ViewSystemsAdvisoriesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    controllers_systems_advisories_response: Optional[shared.ControllersSystemsAdvisoriesResponse] = field(default=None)
    
