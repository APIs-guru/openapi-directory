from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class FindPrivateTweetMetricsByIDQueryParams:
    ids: List[str] = field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': False }})
    

@dataclass
class FindPrivateTweetMetricsByIDRequest:
    query_params: FindPrivateTweetMetricsByIDQueryParams = field()
    

@dataclass
class FindPrivateTweetMetricsByIDResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[Any] = field(default=None)
    problem: Optional[Any] = field(default=None)
    tweet_metrics_response: Optional[shared.TweetMetricsResponse] = field(default=None)
    
