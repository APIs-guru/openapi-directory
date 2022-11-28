import { SpeakeasyBase } from "../../../internal/utils";
import { DefaultData } from "./defaultdata";
import { Meta } from "./meta";
import { Status } from "./status";
export declare class SeldonMessage extends SpeakeasyBase {
    binData?: string;
    data?: DefaultData;
    meta?: Meta;
    status?: Status;
    strData?: string;
}
