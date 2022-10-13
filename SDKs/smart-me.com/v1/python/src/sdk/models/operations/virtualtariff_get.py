from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class VirtualTariffGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    virtual_tariffs_of_folders: Optional[List[shared.VirtualTariffsOfFolder]] = field(default=None)
    
