from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAPIReferenceAnsweringBodiesQueryParams:
    id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    name_contains: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nameContains', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIReferenceAnsweringBodiesRequest:
    query_params: GetAPIReferenceAnsweringBodiesQueryParams = field()
    

@dataclass
class GetAPIReferenceAnsweringBodiesResponse:
    content_type: str = field()
    status_code: int = field()
    answering_bodies: Optional[List[shared.AnsweringBody]] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
