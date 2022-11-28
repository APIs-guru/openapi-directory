from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPILocationConstituencyIDElectionResultElectionIDPathParams:
    election_id: int = field(metadata={'path_param': { 'field_name': 'electionId', 'style': 'simple', 'explode': False }})
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPILocationConstituencyIDElectionResultElectionIDRequest:
    path_params: GetAPILocationConstituencyIDElectionResultElectionIDPathParams = field()
    

@dataclass
class GetAPILocationConstituencyIDElectionResultElectionIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    election_result_item: Optional[shared.ElectionResultItem] = field(default=None)
    
