from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListScoreConfigsQueryParams:
    start_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'start_key', 'style': 'form', 'explode': True }})
    

@dataclass
class ListScoreConfigsRequest:
    query_params: ListScoreConfigsQueryParams = field(default=None)
    

@dataclass
class ListScoreConfigsResponse:
    content_type: str = field(default=None)
    score_configs_output: Optional[shared.ScoreConfigsOutput] = field(default=None)
    status_code: int = field(default=None)
    
