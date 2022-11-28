from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class QueryBatchStatusV4PathParams:
    batch_id: str = field(metadata={'path_param': { 'field_name': 'batchId', 'style': 'simple', 'explode': False }})
    

@dataclass
class QueryBatchStatusV4Request:
    path_params: QueryBatchStatusV4PathParams = field()
    

@dataclass
class QueryBatchStatusV4Response:
    content_type: str = field()
    status_code: int = field()
    query_batch_response_2: Optional[shared.QueryBatchResponse2] = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    
