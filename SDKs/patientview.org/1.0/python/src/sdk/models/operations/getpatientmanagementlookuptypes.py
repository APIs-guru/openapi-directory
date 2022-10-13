from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPatientManagementLookupTypesResponse:
    content_type: str = field(default=None)
    lookup_types: Optional[List[shared.LookupType]] = field(default=None)
    status_code: int = field(default=None)
    
