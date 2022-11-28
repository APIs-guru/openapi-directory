from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class PublishedOralQuestionGetParametersQuestionTypeEnum(str, Enum):
    SUBSTANTIVE = "Substantive"
    TOPICAL = "Topical"


@dataclass
class PublishedOralQuestionGetQueryParams:
    parameters_answering_body_ids: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'parameters.answeringBodyIds', 'style': 'form', 'explode': True }})
    parameters_answering_date_end: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'parameters.answeringDateEnd', 'style': 'form', 'explode': True }})
    parameters_answering_date_start: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'parameters.answeringDateStart', 'style': 'form', 'explode': True }})
    parameters_asking_member_ids: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'parameters.askingMemberIds', 'style': 'form', 'explode': True }})
    parameters_oral_question_time_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'parameters.oralQuestionTimeId', 'style': 'form', 'explode': True }})
    parameters_question_type: Optional[PublishedOralQuestionGetParametersQuestionTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'parameters.questionType', 'style': 'form', 'explode': True }})
    parameters_skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'parameters.skip', 'style': 'form', 'explode': True }})
    parameters_take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'parameters.take', 'style': 'form', 'explode': True }})
    parameters_u_i_ns: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'parameters.uINs', 'style': 'form', 'explode': True }})
    

@dataclass
class PublishedOralQuestionGetRequest:
    query_params: PublishedOralQuestionGetQueryParams = field()
    

@dataclass
class PublishedOralQuestionGetResponse:
    content_type: str = field()
    status_code: int = field()
    api_response_list_published_written_question_: Optional[shared.APIResponseListPublishedWrittenQuestion] = field(default=None)
    api_response_object_: Optional[shared.APIResponseObject] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
