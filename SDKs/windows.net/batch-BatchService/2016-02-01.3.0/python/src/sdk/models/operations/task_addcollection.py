from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional


@dataclass
class TaskAddCollectionPathParams:
    job_id: str = field(metadata={'path_param': { 'field_name': 'jobId', 'style': 'simple', 'explode': False }})
    

@dataclass
class TaskAddCollectionQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    timeout: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'timeout', 'style': 'form', 'explode': True }})
    

@dataclass
class TaskAddCollectionHeaders:
    client_request_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'client-request-id', 'style': 'simple', 'explode': False }})
    ocp_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'ocp-date', 'style': 'simple', 'explode': False }})
    return_client_request_id: Optional[bool] = field(default=None, metadata={'header': { 'field_name': 'return-client-request-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TaskAddCollectionRequest:
    headers: TaskAddCollectionHeaders = field()
    path_params: TaskAddCollectionPathParams = field()
    query_params: TaskAddCollectionQueryParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TaskAddCollectionResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    batch_error: Optional[Any] = field(default=None)
    task_add_collection_result: Optional[Any] = field(default=None)
    
