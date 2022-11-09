import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ScrollingMessageViewModelAlertTypeEnum {
    Standard = "Standard",
    SecondaryChamber = "SecondaryChamber",
    Alert = "Alert",
    SecurityNormal = "SecurityNormal",
    SecurityHigh = "SecurityHigh"
}
export declare enum ScrollingMessageViewModelVerticalAlignmentEnum {
    Top = "Top",
    Middle = "Middle",
    Bottom = "Bottom"
}
export declare class ScrollingMessageViewModel extends SpeakeasyBase {
    alertType?: ScrollingMessageViewModelAlertTypeEnum;
    content?: string;
    displayFrom?: Date;
    displayTo?: Date;
    id?: number;
    verticalAlignment?: ScrollingMessageViewModelVerticalAlignmentEnum;
}
