from dataclasses import dataclass, field



@dataclass
class DeleteUserFollowsPeoplePersonIDPathParams:
    person_id: int = field(default=None, metadata={'path_param': { 'field_name': 'person_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserFollowsPeoplePersonIDRequest:
    path_params: DeleteUserFollowsPeoplePersonIDPathParams = field(default=None)
    

@dataclass
class DeleteUserFollowsPeoplePersonIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
