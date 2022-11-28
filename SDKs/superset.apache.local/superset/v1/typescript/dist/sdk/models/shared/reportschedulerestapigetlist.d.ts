import { SpeakeasyBase } from "../../../internal/utils";
import { Meta34 } from "./meta34";
import { Meta33 } from "./meta33";
import { Meta36 } from "./meta36";
import { Meta35 } from "./meta35";
export declare class ReportScheduleRestApiGetList extends SpeakeasyBase {
    active?: boolean;
    changedBy?: Meta34;
    changedOn?: Date;
    changedOnDeltaHumanized?: any;
    createdBy?: Meta33;
    createdOn?: Date;
    creationMethod?: string;
    crontab: string;
    crontabHumanized?: any;
    description?: string;
    id?: number;
    lastEvalDttm?: Date;
    lastState?: string;
    name: string;
    owners?: Meta36;
    recipients: Meta35;
    timezone?: string;
    type: string;
}
