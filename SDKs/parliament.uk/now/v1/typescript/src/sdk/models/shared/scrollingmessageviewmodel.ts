import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ScrollingMessageViewModelAlertTypeEnum {
    Standard = "Standard"
,    SecondaryChamber = "SecondaryChamber"
,    Alert = "Alert"
,    SecurityNormal = "SecurityNormal"
,    SecurityHigh = "SecurityHigh"
}

export enum ScrollingMessageViewModelVerticalAlignmentEnum {
    Top = "Top"
,    Middle = "Middle"
,    Bottom = "Bottom"
}


export class ScrollingMessageViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=alertType" })
  alertType?: ScrollingMessageViewModelAlertTypeEnum;

  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=displayFrom" })
  displayFrom?: Date;

  @Metadata({ data: "json, name=displayTo" })
  displayTo?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=verticalAlignment" })
  verticalAlignment?: ScrollingMessageViewModelVerticalAlignmentEnum;
}
