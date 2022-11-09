import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CommandEnumCommandModeEnum } from "./commandenumcommandmodeenum";
import { CommandEnumDirectionEnum } from "./commandenumdirectionenum";
import { CommandEnumStatusEnum } from "./commandenumstatusenum";
import { CommandEnumTransportEnum } from "./commandenumtransportenum";


export class WirelessV1Command extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=command" })
  command?: string;

  @Metadata({ data: "json, name=command_mode" })
  commandMode?: CommandEnumCommandModeEnum;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=delivery_receipt_requested" })
  deliveryReceiptRequested?: boolean;

  @Metadata({ data: "json, name=direction" })
  direction?: CommandEnumDirectionEnum;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=sim_sid" })
  simSid?: string;

  @Metadata({ data: "json, name=status" })
  status?: CommandEnumStatusEnum;

  @Metadata({ data: "json, name=transport" })
  transport?: CommandEnumTransportEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
