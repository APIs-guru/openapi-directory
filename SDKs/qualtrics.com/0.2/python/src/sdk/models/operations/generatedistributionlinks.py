from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GenerateDistributionLinksRequest:
    request: shared.CreateDistributionLinks = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GenerateDistributionLinksResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
