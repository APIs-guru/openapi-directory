from dataclasses import dataclass, field



@dataclass
class PostMyFollowsCategoriesIdentifierPathParams:
    identifier: str = field(default=None, metadata={'path_param': { 'field_name': 'identifier', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostMyFollowsCategoriesIdentifierSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMyFollowsCategoriesIdentifierRequest:
    path_params: PostMyFollowsCategoriesIdentifierPathParams = field(default=None)
    security: PostMyFollowsCategoriesIdentifierSecurity = field(default=None)
    

@dataclass
class PostMyFollowsCategoriesIdentifierResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
