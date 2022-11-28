from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetMyFollowsArticlesSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyFollowsArticlesRequest:
    security: GetMyFollowsArticlesSecurity = field()
    

@dataclass
class GetMyFollowsArticlesResponse:
    content_type: str = field()
    status_code: int = field()
    
