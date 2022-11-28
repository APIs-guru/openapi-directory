from dataclasses import dataclass, field



@dataclass
class DeleteUserFollowsPeoplePersonIDPathParams:
    person_id: int = field(metadata={'path_param': { 'field_name': 'person_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserFollowsPeoplePersonIDRequest:
    path_params: DeleteUserFollowsPeoplePersonIDPathParams = field()
    

@dataclass
class DeleteUserFollowsPeoplePersonIDResponse:
    content_type: str = field()
    status_code: int = field()
    
