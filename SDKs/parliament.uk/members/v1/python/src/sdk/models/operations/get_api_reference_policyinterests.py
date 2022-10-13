from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAPIReferencePolicyInterestsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    generic_reference_data: Optional[List[shared.GenericReferenceData]] = field(default=None)
    status_code: int = field(default=None)
    
