from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetUserTagsTagIDShowsPathParams:
    tag_id: int = field(default=None, metadata={'path_param': { 'field_name': 'tag_id', 'style': 'simple', 'explode': False }})
    
class GetUserTagsTagIDShowsEmbedEnum(str, Enum):
    SHOW = "show"


@dataclass
class GetUserTagsTagIDShowsQueryParams:
    embed: Optional[GetUserTagsTagIDShowsEmbedEnum] = field(default=None, metadata={'query_param': { 'field_name': 'embed', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserTagsTagIDShowsRequest:
    path_params: GetUserTagsTagIDShowsPathParams = field(default=None)
    query_params: GetUserTagsTagIDShowsQueryParams = field(default=None)
    

@dataclass
class GetUserTagsTagIDShowsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tag_instances: Optional[List[shared.TagInstance]] = field(default=None)
    
