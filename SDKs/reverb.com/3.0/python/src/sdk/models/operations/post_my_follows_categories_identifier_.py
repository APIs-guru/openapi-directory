from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostMyFollowsCategoriesIdentifierPathParams:
    identifier: str = field(metadata={'path_param': { 'field_name': 'identifier', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostMyFollowsCategoriesIdentifierSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMyFollowsCategoriesIdentifierRequest:
    path_params: PostMyFollowsCategoriesIdentifierPathParams = field()
    security: PostMyFollowsCategoriesIdentifierSecurity = field()
    

@dataclass
class PostMyFollowsCategoriesIdentifierResponse:
    content_type: str = field()
    status_code: int = field()
    
