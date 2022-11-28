from dataclasses import dataclass, field



@dataclass
class DiscussionAPIDeleteTopicPathParams:
    topic_id: int = field(metadata={'path_param': { 'field_name': 'topicId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DiscussionAPIDeleteTopicRequest:
    path_params: DiscussionAPIDeleteTopicPathParams = field()
    

@dataclass
class DiscussionAPIDeleteTopicResponse:
    content_type: str = field()
    status_code: int = field()
    
