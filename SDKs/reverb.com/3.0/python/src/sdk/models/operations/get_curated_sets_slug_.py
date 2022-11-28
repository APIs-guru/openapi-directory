from dataclasses import dataclass, field



@dataclass
class GetCuratedSetsSlugPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCuratedSetsSlugRequest:
    path_params: GetCuratedSetsSlugPathParams = field()
    

@dataclass
class GetCuratedSetsSlugResponse:
    content_type: str = field()
    status_code: int = field()
    
