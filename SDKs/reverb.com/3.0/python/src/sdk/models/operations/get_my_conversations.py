from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetMyConversationsQueryParams:
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    unread_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'unread_only', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMyConversationsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyConversationsRequest:
    query_params: GetMyConversationsQueryParams = field(default=None)
    security: GetMyConversationsSecurity = field(default=None)
    

@dataclass
class GetMyConversationsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
