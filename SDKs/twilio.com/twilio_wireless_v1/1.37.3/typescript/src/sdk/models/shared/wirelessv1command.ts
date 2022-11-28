import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CommandEnumCommandModeEnum } from "./commandenumcommandmodeenum";
import { CommandEnumDirectionEnum } from "./commandenumdirectionenum";
import { CommandEnumStatusEnum } from "./commandenumstatusenum";
import { CommandEnumTransportEnum } from "./commandenumtransportenum";



export class WirelessV1Command extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=command" })
  command?: string;

  @SpeakeasyMetadata({ data: "json, name=command_mode" })
  commandMode?: CommandEnumCommandModeEnum;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=delivery_receipt_requested" })
  deliveryReceiptRequested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: CommandEnumDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=sim_sid" })
  simSid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CommandEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=transport" })
  transport?: CommandEnumTransportEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
