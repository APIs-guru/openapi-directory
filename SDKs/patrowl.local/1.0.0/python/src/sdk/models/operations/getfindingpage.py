from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetFindingPagePathParams:
    scan_id: int = field(metadata={'path_param': { 'field_name': 'scanId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFindingPageRequest:
    path_params: GetFindingPagePathParams = field()
    

@dataclass
class GetFindingPageResponse:
    content_type: str = field()
    status_code: int = field()
    findings: Optional[List[shared.Findings]] = field(default=None)
    
