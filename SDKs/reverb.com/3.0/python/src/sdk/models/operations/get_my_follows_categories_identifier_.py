from dataclasses import dataclass, field



@dataclass
class GetMyFollowsCategoriesIdentifierPathParams:
    identifier: str = field(default=None, metadata={'path_param': { 'field_name': 'identifier', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMyFollowsCategoriesIdentifierSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyFollowsCategoriesIdentifierRequest:
    path_params: GetMyFollowsCategoriesIdentifierPathParams = field(default=None)
    security: GetMyFollowsCategoriesIdentifierSecurity = field(default=None)
    

@dataclass
class GetMyFollowsCategoriesIdentifierResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
