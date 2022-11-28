from dataclasses import dataclass, field
from enum import Enum

class TrustProductEvaluationEnumStatusEnum(str, Enum):
    COMPLIANT = "compliant"
    NONCOMPLIANT = "noncompliant"

