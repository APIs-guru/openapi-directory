from dataclasses import dataclass, field



@dataclass
class GetFeedbackFeedbackIDPathParams:
    feedback_id: str = field(metadata={'path_param': { 'field_name': 'feedback_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFeedbackFeedbackIDRequest:
    path_params: GetFeedbackFeedbackIDPathParams = field()
    

@dataclass
class GetFeedbackFeedbackIDResponse:
    content_type: str = field()
    status_code: int = field()
    
