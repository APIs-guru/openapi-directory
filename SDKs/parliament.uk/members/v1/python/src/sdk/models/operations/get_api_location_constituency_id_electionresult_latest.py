from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPILocationConstituencyIDElectionResultLatestPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPILocationConstituencyIDElectionResultLatestRequest:
    path_params: GetAPILocationConstituencyIDElectionResultLatestPathParams = field()
    

@dataclass
class GetAPILocationConstituencyIDElectionResultLatestResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    election_result_item: Optional[shared.ElectionResultItem] = field(default=None)
    
