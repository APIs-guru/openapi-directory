from dataclasses import dataclass, field



@dataclass
class GetShopsSlugFeedbackSellerPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetShopsSlugFeedbackSellerRequest:
    path_params: GetShopsSlugFeedbackSellerPathParams = field()
    

@dataclass
class GetShopsSlugFeedbackSellerResponse:
    content_type: str = field()
    status_code: int = field()
    
