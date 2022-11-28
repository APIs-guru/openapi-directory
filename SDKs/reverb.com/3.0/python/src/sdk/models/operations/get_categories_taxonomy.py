from dataclasses import dataclass, field



@dataclass
class GetCategoriesTaxonomyResponse:
    content_type: str = field()
    status_code: int = field()
    
