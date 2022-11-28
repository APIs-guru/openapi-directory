import { SpeakeasyBase } from "../../../internal/utils";
import { AwardRecipient } from "./awardrecipient";
export declare class Award extends SpeakeasyBase {
    awardType: number;
    eventKey: string;
    name: string;
    recipientList: AwardRecipient[];
    year: number;
}
