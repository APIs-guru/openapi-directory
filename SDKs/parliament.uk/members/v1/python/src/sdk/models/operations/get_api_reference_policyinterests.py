from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAPIReferencePolicyInterestsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    generic_reference_data: Optional[List[shared.GenericReferenceData]] = field(default=None)
    
