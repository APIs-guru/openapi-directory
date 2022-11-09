import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ScrollingMessageViewModel } from "./scrollingmessageviewmodel";
import { SlideViewModel } from "./slideviewmodel";
export declare enum MessageViewModelAnnunciatorTypeEnum {
    CommonsMain = "CommonsMain",
    LordsMain = "LordsMain",
    Security = "Security"
}
export declare class MessageViewModel extends SpeakeasyBase {
    annunciatorType?: MessageViewModelAnnunciatorTypeEnum;
    id?: number;
    isSecurityOverride?: boolean;
    publishTime?: Date;
    scrollingMessages?: ScrollingMessageViewModel[];
    showCommonsBell?: boolean;
    showLordsBell?: boolean;
    slides?: SlideViewModel[];
}
