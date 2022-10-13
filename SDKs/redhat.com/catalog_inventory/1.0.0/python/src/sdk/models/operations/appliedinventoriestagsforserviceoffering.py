from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AppliedInventoriesTagsForServiceOfferingPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppliedInventoriesTagsForServiceOfferingRequest:
    path_params: AppliedInventoriesTagsForServiceOfferingPathParams = field(default=None)
    request: shared.AppliedInventoriesParametersServicePlan = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AppliedInventoriesTagsForServiceOfferingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tags: Optional[List[shared.Tag]] = field(default=None)
    
