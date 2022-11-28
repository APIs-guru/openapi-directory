from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PricingQueryParams:
    country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    format: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class PricingRequest:
    query_params: PricingQueryParams = field()
    

@dataclass
class PricingResponse:
    content_type: str = field()
    status_code: int = field()
    
