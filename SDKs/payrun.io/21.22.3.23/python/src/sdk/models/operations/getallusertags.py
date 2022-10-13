from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAllUserTagsHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetAllUserTagsRequest:
    headers: GetAllUserTagsHeaders = field(default=None)
    

@dataclass
class GetAllUserTagsResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link_collection: Optional[shared.LinkCollection] = field(default=None)
    status_code: int = field(default=None)
    
