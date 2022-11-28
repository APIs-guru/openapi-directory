import { SpeakeasyBase } from "../../../internal/utils";
import { UserMessageContract } from "./usermessagecontract";
export declare class PartialFindResultUserMessageContract extends SpeakeasyBase {
    items?: UserMessageContract[];
    term?: string;
    totalCount?: number;
}
