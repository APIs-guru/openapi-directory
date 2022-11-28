from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUsersIDAttachmentsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersIDAttachmentsQueryParams:
    unassigned: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'unassigned', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsersIDAttachmentsRequest:
    path_params: GetUsersIDAttachmentsPathParams = field()
    query_params: GetUsersIDAttachmentsQueryParams = field()
    

@dataclass
class GetUsersIDAttachmentsResponse:
    content_type: str = field()
    status_code: int = field()
    attachments: Optional[List[shared.Attachment]] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
