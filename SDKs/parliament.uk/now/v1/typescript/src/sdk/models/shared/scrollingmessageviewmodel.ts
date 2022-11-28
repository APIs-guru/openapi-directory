import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ScrollingMessageViewModelAlertTypeEnum {
    Standard = "Standard",
    SecondaryChamber = "SecondaryChamber",
    Alert = "Alert",
    SecurityNormal = "SecurityNormal",
    SecurityHigh = "SecurityHigh"
}

export enum ScrollingMessageViewModelVerticalAlignmentEnum {
    Top = "Top",
    Middle = "Middle",
    Bottom = "Bottom"
}


export class ScrollingMessageViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alertType" })
  alertType?: ScrollingMessageViewModelAlertTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=displayFrom" })
  displayFrom?: Date;

  @SpeakeasyMetadata({ data: "json, name=displayTo" })
  displayTo?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=verticalAlignment" })
  verticalAlignment?: ScrollingMessageViewModelVerticalAlignmentEnum;
}
