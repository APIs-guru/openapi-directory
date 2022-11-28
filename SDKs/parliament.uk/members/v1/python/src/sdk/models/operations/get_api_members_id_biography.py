from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIMembersIDBiographyPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIMembersIDBiographyRequest:
    path_params: GetAPIMembersIDBiographyPathParams = field()
    

@dataclass
class GetAPIMembersIDBiographyResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    member_biography_item: Optional[shared.MemberBiographyItem] = field(default=None)
    
