from dataclasses import dataclass, field



@dataclass
class GetCategoriesResponse:
    content_type: str = field()
    status_code: int = field()
    
