import { SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkerReservationEnumStatusEnum } from "./workerreservationenumstatusenum";
export declare class TaskrouterV1WorkspaceWorkerWorkerReservation extends SpeakeasyBase {
    accountSid?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    links?: Map<string, any>;
    reservationStatus?: WorkerReservationEnumStatusEnum;
    sid?: string;
    taskSid?: string;
    url?: string;
    workerName?: string;
    workerSid?: string;
    workspaceSid?: string;
}
