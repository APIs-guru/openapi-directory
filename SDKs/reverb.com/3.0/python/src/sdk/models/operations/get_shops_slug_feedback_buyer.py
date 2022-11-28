from dataclasses import dataclass, field



@dataclass
class GetShopsSlugFeedbackBuyerPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetShopsSlugFeedbackBuyerRequest:
    path_params: GetShopsSlugFeedbackBuyerPathParams = field()
    

@dataclass
class GetShopsSlugFeedbackBuyerResponse:
    content_type: str = field()
    status_code: int = field()
    
