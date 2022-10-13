from dataclasses import dataclass, field



@dataclass
class DeleteMyFollowsCategoriesIdentifierPathParams:
    identifier: str = field(default=None, metadata={'path_param': { 'field_name': 'identifier', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMyFollowsCategoriesIdentifierSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteMyFollowsCategoriesIdentifierRequest:
    path_params: DeleteMyFollowsCategoriesIdentifierPathParams = field(default=None)
    security: DeleteMyFollowsCategoriesIdentifierSecurity = field(default=None)
    

@dataclass
class DeleteMyFollowsCategoriesIdentifierResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
