import { SpeakeasyBase } from "../../../internal/utils";
import { HouseEnumEnum } from "./houseenumenum";
export declare class DailyReportViewModel extends SpeakeasyBase {
    date?: Date;
    fileSizeBytes?: number;
    house?: HouseEnumEnum;
    url?: string;
}
