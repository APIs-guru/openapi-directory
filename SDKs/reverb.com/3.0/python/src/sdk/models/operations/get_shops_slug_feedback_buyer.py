from dataclasses import dataclass, field



@dataclass
class GetShopsSlugFeedbackBuyerPathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetShopsSlugFeedbackBuyerRequest:
    path_params: GetShopsSlugFeedbackBuyerPathParams = field(default=None)
    

@dataclass
class GetShopsSlugFeedbackBuyerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
