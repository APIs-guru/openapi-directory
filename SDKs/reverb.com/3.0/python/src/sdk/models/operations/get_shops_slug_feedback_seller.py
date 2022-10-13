from dataclasses import dataclass, field



@dataclass
class GetShopsSlugFeedbackSellerPathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetShopsSlugFeedbackSellerRequest:
    path_params: GetShopsSlugFeedbackSellerPathParams = field(default=None)
    

@dataclass
class GetShopsSlugFeedbackSellerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
