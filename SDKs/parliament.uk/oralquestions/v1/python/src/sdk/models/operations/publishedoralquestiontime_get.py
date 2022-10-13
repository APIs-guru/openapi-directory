from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class PublishedOralQuestionTimeGetQueryParams:
    parameters_answering_body_ids: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'parameters.answeringBodyIds', 'style': 'form', 'explode': True }})
    parameters_answering_date_end: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'parameters.answeringDateEnd', 'style': 'form', 'explode': True }})
    parameters_answering_date_start: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'parameters.answeringDateStart', 'style': 'form', 'explode': True }})
    parameters_deadline_date_end: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'parameters.deadlineDateEnd', 'style': 'form', 'explode': True }})
    parameters_deadline_date_start: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'parameters.deadlineDateStart', 'style': 'form', 'explode': True }})
    parameters_oral_question_time_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'parameters.oralQuestionTimeId', 'style': 'form', 'explode': True }})
    parameters_skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'parameters.skip', 'style': 'form', 'explode': True }})
    parameters_take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'parameters.take', 'style': 'form', 'explode': True }})
    

@dataclass
class PublishedOralQuestionTimeGetRequest:
    query_params: PublishedOralQuestionTimeGetQueryParams = field(default=None)
    

@dataclass
class PublishedOralQuestionTimeGetResponse:
    api_response_list_published_written_question_: Optional[shared.APIResponseListPublishedWrittenQuestion] = field(default=None)
    api_response_object_: Optional[shared.APIResponseObject] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
