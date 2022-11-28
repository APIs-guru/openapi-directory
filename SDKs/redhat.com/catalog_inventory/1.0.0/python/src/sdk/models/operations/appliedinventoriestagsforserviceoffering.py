from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AppliedInventoriesTagsForServiceOfferingPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppliedInventoriesTagsForServiceOfferingRequest:
    path_params: AppliedInventoriesTagsForServiceOfferingPathParams = field()
    request: shared.AppliedInventoriesParametersServicePlan = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AppliedInventoriesTagsForServiceOfferingResponse:
    content_type: str = field()
    status_code: int = field()
    tags: Optional[List[shared.Tag]] = field(default=None)
    
