from dataclasses import dataclass, field



@dataclass
class GetShippingRegionsResponse:
    content_type: str = field()
    status_code: int = field()
    
