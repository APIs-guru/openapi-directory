from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAPIMiscCulturesHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIMiscCulturesRequest:
    headers: GetAPIMiscCulturesHeaders = field(default=None)
    

@dataclass
class GetAPIMiscCulturesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
