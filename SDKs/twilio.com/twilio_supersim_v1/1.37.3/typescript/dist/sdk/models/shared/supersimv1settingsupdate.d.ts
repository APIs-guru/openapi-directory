import { SpeakeasyBase } from "../../../internal/utils";
import { SettingsUpdateEnumStatusEnum } from "./settingsupdateenumstatusenum";
export declare class SupersimV1SettingsUpdate extends SpeakeasyBase {
    dateCompleted?: Date;
    dateCreated?: Date;
    dateUpdated?: Date;
    iccid?: string;
    packages?: any[];
    sid?: string;
    simSid?: string;
    status?: SettingsUpdateEnumStatusEnum;
}
