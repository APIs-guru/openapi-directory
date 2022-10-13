from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class QueryBatchStatusV3PathParams:
    batch_id: str = field(default=None, metadata={'path_param': { 'field_name': 'batchId', 'style': 'simple', 'explode': False }})
    

@dataclass
class QueryBatchStatusV3Request:
    path_params: QueryBatchStatusV3PathParams = field(default=None)
    

@dataclass
class QueryBatchStatusV3Response:
    content_type: str = field(default=None)
    query_batch_response: Optional[shared.QueryBatchResponse] = field(default=None)
    status_code: int = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    
