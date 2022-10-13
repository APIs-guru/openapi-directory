from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPILocationConstituencyIDElectionResultElectionIDPathParams:
    election_id: int = field(default=None, metadata={'path_param': { 'field_name': 'electionId', 'style': 'simple', 'explode': False }})
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPILocationConstituencyIDElectionResultElectionIDRequest:
    path_params: GetAPILocationConstituencyIDElectionResultElectionIDPathParams = field(default=None)
    

@dataclass
class GetAPILocationConstituencyIDElectionResultElectionIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    election_result_item: Optional[shared.ElectionResultItem] = field(default=None)
    status_code: int = field(default=None)
    
