from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import conversation


@dataclass_json
@dataclass
class ConversationsResponseError:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class ConversationsResponsePagination:
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCount' }})
    

@dataclass_json
@dataclass
class ConversationsResponse:
    data: Optional[List[conversation.Conversation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    error: Optional[ConversationsResponseError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    pagination: Optional[ConversationsResponsePagination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    
