from dataclasses import dataclass, field
from enum import Enum

class AnnotationEnumConnectivityIssueEnum(str, Enum):
    UNKNOWN_CONNECTIVITY_ISSUE = "unknown_connectivity_issue"
    NO_CONNECTIVITY_ISSUE = "no_connectivity_issue"
    INVALID_NUMBER = "invalid_number"
    CALLER_ID = "caller_id"
    DROPPED_CALL = "dropped_call"
    NUMBER_REACHABILITY = "number_reachability"

