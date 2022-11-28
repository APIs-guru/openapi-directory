import { SpeakeasyBase } from "../../../internal/utils";
import { CommandEnumCommandModeEnum } from "./commandenumcommandmodeenum";
import { CommandEnumDirectionEnum } from "./commandenumdirectionenum";
import { CommandEnumStatusEnum } from "./commandenumstatusenum";
import { CommandEnumTransportEnum } from "./commandenumtransportenum";
export declare class WirelessV1Command extends SpeakeasyBase {
    accountSid?: string;
    command?: string;
    commandMode?: CommandEnumCommandModeEnum;
    dateCreated?: Date;
    dateUpdated?: Date;
    deliveryReceiptRequested?: boolean;
    direction?: CommandEnumDirectionEnum;
    sid?: string;
    simSid?: string;
    status?: CommandEnumStatusEnum;
    transport?: CommandEnumTransportEnum;
    url?: string;
}
