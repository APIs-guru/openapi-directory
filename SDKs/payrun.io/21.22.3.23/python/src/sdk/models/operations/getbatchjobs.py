from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetBatchJobsHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetBatchJobsRequest:
    headers: GetBatchJobsHeaders = field(default=None)
    

@dataclass
class GetBatchJobsResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link_collection: Optional[shared.LinkCollection] = field(default=None)
    status_code: int = field(default=None)
    
