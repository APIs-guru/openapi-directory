from dataclasses import dataclass, field



@dataclass
class GetListingsSlugSimilarListingsPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingsSlugSimilarListingsRequest:
    path_params: GetListingsSlugSimilarListingsPathParams = field()
    

@dataclass
class GetListingsSlugSimilarListingsResponse:
    content_type: str = field()
    status_code: int = field()
    
