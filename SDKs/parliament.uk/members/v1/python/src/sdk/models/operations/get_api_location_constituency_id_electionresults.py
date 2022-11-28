from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPILocationConstituencyIDElectionResultsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPILocationConstituencyIDElectionResultsRequest:
    path_params: GetAPILocationConstituencyIDElectionResultsPathParams = field()
    

@dataclass
class GetAPILocationConstituencyIDElectionResultsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    election_result_list_item: Optional[shared.ElectionResultListItem] = field(default=None)
    
