from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class VirtualTariffGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    virtual_tariffs_of_folders: Optional[List[shared.VirtualTariffsOfFolder]] = field(default=None)
    
