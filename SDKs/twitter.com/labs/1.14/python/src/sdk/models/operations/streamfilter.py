from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class StreamFilterQueryParams:
    expansions: Optional[List[List[shared.TweetExpansionsParamTypeEnum]]] = field(default=None, metadata={'query_param': { 'field_name': 'expansions', 'style': 'form', 'explode': True }})
    

@dataclass
class StreamFilterRequest:
    query_params: StreamFilterQueryParams = field(default=None)
    

@dataclass
class StreamFilterResponse:
    content_type: str = field(default=None)
    error: Optional[Any] = field(default=None)
    problem: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    stream_filter_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
