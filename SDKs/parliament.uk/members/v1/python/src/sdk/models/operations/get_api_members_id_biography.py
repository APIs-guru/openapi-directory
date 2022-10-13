from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIMembersIDBiographyPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIMembersIDBiographyRequest:
    path_params: GetAPIMembersIDBiographyPathParams = field(default=None)
    

@dataclass
class GetAPIMembersIDBiographyResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    member_biography_item: Optional[shared.MemberBiographyItem] = field(default=None)
    status_code: int = field(default=None)
    
