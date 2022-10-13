from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUsersIDAttachmentsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersIDAttachmentsQueryParams:
    unassigned: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'unassigned', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsersIDAttachmentsRequest:
    path_params: GetUsersIDAttachmentsPathParams = field(default=None)
    query_params: GetUsersIDAttachmentsQueryParams = field(default=None)
    

@dataclass
class GetUsersIDAttachmentsResponse:
    attachments: Optional[List[shared.Attachment]] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
