from dataclasses import dataclass, field



@dataclass
class GetShopsSlugFeedbackPathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetShopsSlugFeedbackRequest:
    path_params: GetShopsSlugFeedbackPathParams = field(default=None)
    

@dataclass
class GetShopsSlugFeedbackResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
