from dataclasses import dataclass, field



@dataclass
class GetSalesSlugPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSalesSlugRequest:
    path_params: GetSalesSlugPathParams = field()
    

@dataclass
class GetSalesSlugResponse:
    content_type: str = field()
    status_code: int = field()
    
