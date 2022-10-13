from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostNewBatchJobHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class PostNewBatchJobRequest:
    headers: PostNewBatchJobHeaders = field(default=None)
    request: shared.BatchJobInstruction = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostNewBatchJobResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link: Optional[shared.Link] = field(default=None)
    status_code: int = field(default=None)
    
