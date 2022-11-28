from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class StreamSampleQueryParams:
    expansions: Optional[List[List[shared.TweetExpansionsParamTypeEnum]]] = field(default=None, metadata={'query_param': { 'field_name': 'expansions', 'style': 'form', 'explode': True }})
    

@dataclass
class StreamSampleRequest:
    query_params: StreamSampleQueryParams = field()
    

@dataclass
class StreamSampleResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[Any] = field(default=None)
    problem: Optional[Any] = field(default=None)
    stream_sample_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
