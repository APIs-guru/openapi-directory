from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class FindPrivateTweetMetricsByIDQueryParams:
    ids: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': False }})
    

@dataclass
class FindPrivateTweetMetricsByIDRequest:
    query_params: FindPrivateTweetMetricsByIDQueryParams = field(default=None)
    

@dataclass
class FindPrivateTweetMetricsByIDResponse:
    content_type: str = field(default=None)
    error: Optional[Any] = field(default=None)
    problem: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    tweet_metrics_response: Optional[shared.TweetMetricsResponse] = field(default=None)
    
