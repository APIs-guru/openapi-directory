from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ViewAdvisoriesSystemsSecurity:
    rh_identity: shared.SchemeRhIdentity = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ViewAdvisoriesSystemsRequest:
    request: shared.ControllersSystemsAdvisoriesRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: ViewAdvisoriesSystemsSecurity = field(default=None)
    

@dataclass
class ViewAdvisoriesSystemsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    controllers_advisories_systems_response: Optional[shared.ControllersAdvisoriesSystemsResponse] = field(default=None)
    
