from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetUserTagsTagIDShowsPathParams:
    tag_id: int = field(metadata={'path_param': { 'field_name': 'tag_id', 'style': 'simple', 'explode': False }})
    
class GetUserTagsTagIDShowsEmbedEnum(str, Enum):
    SHOW = "show"


@dataclass
class GetUserTagsTagIDShowsQueryParams:
    embed: Optional[GetUserTagsTagIDShowsEmbedEnum] = field(default=None, metadata={'query_param': { 'field_name': 'embed', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserTagsTagIDShowsRequest:
    path_params: GetUserTagsTagIDShowsPathParams = field()
    query_params: GetUserTagsTagIDShowsQueryParams = field()
    

@dataclass
class GetUserTagsTagIDShowsResponse:
    content_type: str = field()
    status_code: int = field()
    tag_instances: Optional[List[shared.TagInstance]] = field(default=None)
    
