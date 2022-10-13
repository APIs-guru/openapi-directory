from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import electioncandidate
from . import party


@dataclass_json
@dataclass
class ElectionResult:
    candidates: Optional[List[electioncandidate.ElectionCandidate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidates' }})
    constituency_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'constituencyName' }})
    election_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'electionDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    election_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'electionId' }})
    election_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'electionTitle' }})
    electorate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'electorate' }})
    is_general_election: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isGeneralElection' }})
    is_notional: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isNotional' }})
    majority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'majority' }})
    result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    turnout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'turnout' }})
    winning_party: Optional[party.Party] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'winningParty' }})
    
