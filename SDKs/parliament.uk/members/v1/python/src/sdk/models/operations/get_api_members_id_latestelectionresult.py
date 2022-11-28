from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIMembersIDLatestElectionResultPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIMembersIDLatestElectionResultRequest:
    path_params: GetAPIMembersIDLatestElectionResultPathParams = field()
    

@dataclass
class GetAPIMembersIDLatestElectionResultResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    election_result_item: Optional[shared.ElectionResultItem] = field(default=None)
    
