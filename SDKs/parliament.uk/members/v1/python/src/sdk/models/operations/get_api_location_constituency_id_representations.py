from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAPILocationConstituencyIDRepresentationsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPILocationConstituencyIDRepresentationsRequest:
    path_params: GetAPILocationConstituencyIDRepresentationsPathParams = field(default=None)
    

@dataclass
class GetAPILocationConstituencyIDRepresentationsResponse:
    body: bytes = field(default=None)
    constituency_representation_list_item: Optional[shared.ConstituencyRepresentationListItem] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
