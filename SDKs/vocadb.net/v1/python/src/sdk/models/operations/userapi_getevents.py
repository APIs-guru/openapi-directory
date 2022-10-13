from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class UserAPIGetEventsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class UserAPIGetEventsRelationshipTypeEnum(str, Enum):
    INTERESTED = "Interested"
    ATTENDING = "Attending"


@dataclass
class UserAPIGetEventsQueryParams:
    relationship_type: UserAPIGetEventsRelationshipTypeEnum = field(default=None, metadata={'query_param': { 'field_name': 'relationshipType', 'style': 'form', 'explode': True }})
    

@dataclass
class UserAPIGetEventsRequest:
    path_params: UserAPIGetEventsPathParams = field(default=None)
    query_params: UserAPIGetEventsQueryParams = field(default=None)
    

@dataclass
class UserAPIGetEventsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    release_event_for_api_contracts: Optional[List[shared.ReleaseEventForAPIContract]] = field(default=None)
    status_code: int = field(default=None)
    
