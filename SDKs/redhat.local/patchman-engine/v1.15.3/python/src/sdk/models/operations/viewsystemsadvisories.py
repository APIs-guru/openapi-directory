from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ViewSystemsAdvisoriesSecurity:
    rh_identity: shared.SchemeRhIdentity = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ViewSystemsAdvisoriesRequest:
    request: shared.ControllersSystemsAdvisoriesRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: ViewSystemsAdvisoriesSecurity = field()
    

@dataclass
class ViewSystemsAdvisoriesResponse:
    content_type: str = field()
    status_code: int = field()
    controllers_systems_advisories_response: Optional[shared.ControllersSystemsAdvisoriesResponse] = field(default=None)
    
