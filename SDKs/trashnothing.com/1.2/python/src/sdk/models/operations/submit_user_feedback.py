from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class SubmitUserFeedbackPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubmitUserFeedbackRequestBody:
    positive: int = field(metadata={'multipart_form': { 'field_name': 'positive' }})
    category: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'category' }})
    content: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'content' }})
    

@dataclass_json
@dataclass
class SubmitUserFeedback200ApplicationJSON:
    feedback: Optional[shared.Feedback] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedback') }})
    user: Optional[shared.User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    

@dataclass
class SubmitUserFeedbackRequest:
    path_params: SubmitUserFeedbackPathParams = field()
    request: SubmitUserFeedbackRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class SubmitUserFeedbackResponse:
    content_type: str = field()
    status_code: int = field()
    submit_user_feedback_200_application_json_object: Optional[SubmitUserFeedback200ApplicationJSON] = field(default=None)
    
