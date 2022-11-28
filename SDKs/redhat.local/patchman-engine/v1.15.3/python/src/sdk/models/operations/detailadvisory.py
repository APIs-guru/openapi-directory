from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DetailAdvisoryPathParams:
    advisory_id: str = field(metadata={'path_param': { 'field_name': 'advisory_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DetailAdvisorySecurity:
    rh_identity: shared.SchemeRhIdentity = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DetailAdvisoryRequest:
    path_params: DetailAdvisoryPathParams = field()
    security: DetailAdvisorySecurity = field()
    

@dataclass
class DetailAdvisoryResponse:
    content_type: str = field()
    status_code: int = field()
    controllers_advisory_detail_response: Optional[shared.ControllersAdvisoryDetailResponse] = field(default=None)
    
