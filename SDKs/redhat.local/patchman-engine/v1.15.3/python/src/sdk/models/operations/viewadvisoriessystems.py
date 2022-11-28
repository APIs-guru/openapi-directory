from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ViewAdvisoriesSystemsSecurity:
    rh_identity: shared.SchemeRhIdentity = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ViewAdvisoriesSystemsRequest:
    request: shared.ControllersSystemsAdvisoriesRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: ViewAdvisoriesSystemsSecurity = field()
    

@dataclass
class ViewAdvisoriesSystemsResponse:
    content_type: str = field()
    status_code: int = field()
    controllers_advisories_systems_response: Optional[shared.ControllersAdvisoriesSystemsResponse] = field(default=None)
    
