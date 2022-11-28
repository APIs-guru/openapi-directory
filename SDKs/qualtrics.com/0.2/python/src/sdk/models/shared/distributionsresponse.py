from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DistributionsResponseMeta:
    http_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpStatus') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    

@dataclass_json
@dataclass
class DistributionsResponseResultElementsHeaders:
    from_email: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromEmail') }})
    from_name: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromName') }})
    reply_to_email: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replyToEmail') }})
    

@dataclass_json
@dataclass
class DistributionsResponseResultElementsMessage:
    library_id: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('libraryId') }})
    message_id: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageId') }})
    message_text: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageText') }})
    

@dataclass_json
@dataclass
class DistributionsResponseResultElementsRecipients:
    contact_id: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactId') }})
    library_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('libraryId') }})
    mailing_list_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mailingListId') }})
    sample_id: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleId') }})
    

@dataclass_json
@dataclass
class DistributionsResponseResultElementsStats:
    blocked: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocked') }})
    bounced: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bounced') }})
    complaints: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complaints') }})
    failed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failed') }})
    finished: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    opened: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opened') }})
    sent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sent') }})
    skipped: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipped') }})
    started: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    

@dataclass_json
@dataclass
class DistributionsResponseResultElementsSurveyLink:
    expiration_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationDate') }})
    link_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkType') }})
    survey_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('surveyId') }})
    

@dataclass_json
@dataclass
class DistributionsResponseResultElements:
    created_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdDate') }})
    custom_headers: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('customHeaders') }})
    embedded_data: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('embeddedData') }})
    headers: DistributionsResponseResultElementsHeaders = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: DistributionsResponseResultElementsMessage = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    modified_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedDate') }})
    organization_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizationId') }})
    owner_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerId') }})
    parent_distribution_id: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentDistributionId') }})
    recipients: DistributionsResponseResultElementsRecipients = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipients') }})
    request_status: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestStatus') }})
    request_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestType') }})
    send_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendDate') }})
    stats: DistributionsResponseResultElementsStats = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    survey_link: DistributionsResponseResultElementsSurveyLink = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('surveyLink') }})
    

@dataclass_json
@dataclass
class DistributionsResponseResult:
    elements: Optional[List[DistributionsResponseResultElements]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elements') }})
    next_page: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPage') }})
    

@dataclass_json
@dataclass
class DistributionsResponse:
    meta: Optional[DistributionsResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    result: Optional[DistributionsResponseResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    
