from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPILocationConstituencyIDRepresentationsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPILocationConstituencyIDRepresentationsRequest:
    path_params: GetAPILocationConstituencyIDRepresentationsPathParams = field()
    

@dataclass
class GetAPILocationConstituencyIDRepresentationsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    constituency_representation_list_item: Optional[shared.ConstituencyRepresentationListItem] = field(default=None)
    
