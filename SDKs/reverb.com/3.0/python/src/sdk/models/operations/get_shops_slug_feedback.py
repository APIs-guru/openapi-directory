from dataclasses import dataclass, field



@dataclass
class GetShopsSlugFeedbackPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetShopsSlugFeedbackRequest:
    path_params: GetShopsSlugFeedbackPathParams = field()
    

@dataclass
class GetShopsSlugFeedbackResponse:
    content_type: str = field()
    status_code: int = field()
    
