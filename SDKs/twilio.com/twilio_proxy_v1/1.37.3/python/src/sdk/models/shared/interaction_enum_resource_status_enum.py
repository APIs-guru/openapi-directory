from dataclasses import dataclass, field
from enum import Enum

class InteractionEnumResourceStatusEnum(str, Enum):
    ACCEPTED = "accepted"
    ANSWERED = "answered"
    BUSY = "busy"
    CANCELED = "canceled"
    COMPLETED = "completed"
    DELETED = "deleted"
    DELIVERED = "delivered"
    DELIVERY_UNKNOWN = "delivery-unknown"
    FAILED = "failed"
    IN_PROGRESS = "in-progress"
    INITIATED = "initiated"
    NO_ANSWER = "no-answer"
    QUEUED = "queued"
    RECEIVED = "received"
    RECEIVING = "receiving"
    RINGING = "ringing"
    SCHEDULED = "scheduled"
    SENDING = "sending"
    SENT = "sent"
    UNDELIVERED = "undelivered"
    UNKNOWN = "unknown"

