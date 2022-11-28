from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostGraphQlRequest:
    request: shared.GraphQlRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostGraphQlResponse:
    content_type: str = field()
    status_code: int = field()
    graph_ql_response: Optional[shared.GraphQlResponse] = field(default=None)
    
