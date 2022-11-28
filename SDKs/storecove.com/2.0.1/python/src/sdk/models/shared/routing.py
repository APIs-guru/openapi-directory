from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Routing:
    r"""Routing
    The different ways to send the invoice to the recipient. The publicIdentifiers are used to send via the Peppol network, if the recipient is not registered on the Peppol network, the invoice will be sent to the email addresses in the emails property. This property is only mandatory when sending the invoice data using the <<_openapi_invoice>> property, not when sending using the <<_openapi_invoicedata>> property, in which case this information will be extracted from the <<_openapi_invoicedata>> object. If you do specify an <<_openapi_invoicerecipient>> object and an <<_openapi_invoicedata>> object, the data from the two will be merged.
    """
    
    e_identifiers: Optional[List[RoutingIdentifier]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eIdentifiers') }})
    emails: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    
