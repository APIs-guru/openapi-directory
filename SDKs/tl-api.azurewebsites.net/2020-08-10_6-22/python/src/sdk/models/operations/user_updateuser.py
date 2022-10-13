from dataclasses import dataclass, field
from typing import Optional


@dataclass
class UserUpdateUserQueryParams:
    account_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'AccountNumber', 'style': 'form', 'explode': True }})
    external_entity_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ExternalEntityNumber', 'style': 'form', 'explode': True }})
    guardian: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Guardian', 'style': 'form', 'explode': True }})
    gym_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'GymNumber', 'style': 'form', 'explode': True }})
    introduce_by: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'IntroduceBy', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Name', 'style': 'form', 'explode': True }})
    number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Number', 'style': 'form', 'explode': True }})
    type_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'TypeId', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'UserId', 'style': 'form', 'explode': True }})
    

@dataclass
class UserUpdateUserRequest:
    query_params: UserUpdateUserQueryParams = field(default=None)
    

@dataclass
class UserUpdateUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
