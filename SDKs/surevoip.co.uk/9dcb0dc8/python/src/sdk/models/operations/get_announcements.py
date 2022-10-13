from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAnnouncementsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    one_get_responses_200_content_application_1json_schema: Optional[shared.OneGetResponses200ContentApplication1jsonSchema] = field(default=None)
    
