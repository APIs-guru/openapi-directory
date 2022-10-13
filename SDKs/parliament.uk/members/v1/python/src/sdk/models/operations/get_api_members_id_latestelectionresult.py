from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIMembersIDLatestElectionResultPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIMembersIDLatestElectionResultRequest:
    path_params: GetAPIMembersIDLatestElectionResultPathParams = field(default=None)
    

@dataclass
class GetAPIMembersIDLatestElectionResultResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    election_result_item: Optional[shared.ElectionResultItem] = field(default=None)
    status_code: int = field(default=None)
    
