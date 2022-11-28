from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetMyFollowsCategoriesIdentifierPathParams:
    identifier: str = field(metadata={'path_param': { 'field_name': 'identifier', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMyFollowsCategoriesIdentifierSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyFollowsCategoriesIdentifierRequest:
    path_params: GetMyFollowsCategoriesIdentifierPathParams = field()
    security: GetMyFollowsCategoriesIdentifierSecurity = field()
    

@dataclass
class GetMyFollowsCategoriesIdentifierResponse:
    content_type: str = field()
    status_code: int = field()
    
