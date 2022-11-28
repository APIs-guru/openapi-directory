from dataclasses import dataclass, field



@dataclass
class GetShippingProvidersResponse:
    content_type: str = field()
    status_code: int = field()
    
