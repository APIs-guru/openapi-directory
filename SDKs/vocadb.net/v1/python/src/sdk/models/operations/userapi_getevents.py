from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class UserAPIGetEventsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class UserAPIGetEventsRelationshipTypeEnum(str, Enum):
    INTERESTED = "Interested"
    ATTENDING = "Attending"


@dataclass
class UserAPIGetEventsQueryParams:
    relationship_type: UserAPIGetEventsRelationshipTypeEnum = field(metadata={'query_param': { 'field_name': 'relationshipType', 'style': 'form', 'explode': True }})
    

@dataclass
class UserAPIGetEventsRequest:
    path_params: UserAPIGetEventsPathParams = field()
    query_params: UserAPIGetEventsQueryParams = field()
    

@dataclass
class UserAPIGetEventsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    release_event_for_api_contracts: Optional[List[shared.ReleaseEventForAPIContract]] = field(default=None)
    
