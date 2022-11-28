from dataclasses import dataclass, field



@dataclass
class GetComparisonShoppingPagesResponse:
    content_type: str = field()
    status_code: int = field()
    
