from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PublishedEarlyDayMotionGetPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PublishedEarlyDayMotionGetRequest:
    path_params: PublishedEarlyDayMotionGetPathParams = field(default=None)
    

@dataclass
class PublishedEarlyDayMotionGetResponse:
    api_response_list_published_written_question_: Optional[shared.APIResponseListPublishedWrittenQuestion] = field(default=None)
    api_response_object_: Optional[shared.APIResponseObject] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
