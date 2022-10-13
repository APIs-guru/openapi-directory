from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAPILocationConstituencyIDElectionResultsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPILocationConstituencyIDElectionResultsRequest:
    path_params: GetAPILocationConstituencyIDElectionResultsPathParams = field(default=None)
    

@dataclass
class GetAPILocationConstituencyIDElectionResultsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    election_result_list_item: Optional[shared.ElectionResultListItem] = field(default=None)
    status_code: int = field(default=None)
    
