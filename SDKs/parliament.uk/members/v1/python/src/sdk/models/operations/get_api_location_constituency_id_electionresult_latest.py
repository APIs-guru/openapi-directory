from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPILocationConstituencyIDElectionResultLatestPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPILocationConstituencyIDElectionResultLatestRequest:
    path_params: GetAPILocationConstituencyIDElectionResultLatestPathParams = field(default=None)
    

@dataclass
class GetAPILocationConstituencyIDElectionResultLatestResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    election_result_item: Optional[shared.ElectionResultItem] = field(default=None)
    status_code: int = field(default=None)
    
