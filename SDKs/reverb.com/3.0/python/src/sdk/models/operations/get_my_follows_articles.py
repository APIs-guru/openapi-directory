from dataclasses import dataclass, field



@dataclass
class GetMyFollowsArticlesSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyFollowsArticlesRequest:
    security: GetMyFollowsArticlesSecurity = field(default=None)
    

@dataclass
class GetMyFollowsArticlesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
