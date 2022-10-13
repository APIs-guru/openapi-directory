from dataclasses import dataclass, field



@dataclass
class GetCuratedSetsSlugPathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCuratedSetsSlugRequest:
    path_params: GetCuratedSetsSlugPathParams = field(default=None)
    

@dataclass
class GetCuratedSetsSlugResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
