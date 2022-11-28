from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PublishedEarlyDayMotionGetPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PublishedEarlyDayMotionGetRequest:
    path_params: PublishedEarlyDayMotionGetPathParams = field()
    

@dataclass
class PublishedEarlyDayMotionGetResponse:
    content_type: str = field()
    status_code: int = field()
    api_response_list_published_written_question_: Optional[shared.APIResponseListPublishedWrittenQuestion] = field(default=None)
    api_response_object_: Optional[shared.APIResponseObject] = field(default=None)
    
