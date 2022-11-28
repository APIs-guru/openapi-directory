from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ListScoreConfigsQueryParams:
    start_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'start_key', 'style': 'form', 'explode': True }})
    

@dataclass
class ListScoreConfigsRequest:
    query_params: ListScoreConfigsQueryParams = field()
    

@dataclass
class ListScoreConfigsResponse:
    content_type: str = field()
    status_code: int = field()
    score_configs_output: Optional[shared.ScoreConfigsOutput] = field(default=None)
    
