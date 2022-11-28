import { SpeakeasyBase } from "../../../internal/utils";
import { TaskReservationEnumStatusEnum } from "./taskreservationenumstatusenum";
export declare class TaskrouterV1WorkspaceTaskTaskReservation extends SpeakeasyBase {
    accountSid?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    links?: Map<string, any>;
    reservationStatus?: TaskReservationEnumStatusEnum;
    sid?: string;
    taskSid?: string;
    url?: string;
    workerName?: string;
    workerSid?: string;
    workspaceSid?: string;
}
