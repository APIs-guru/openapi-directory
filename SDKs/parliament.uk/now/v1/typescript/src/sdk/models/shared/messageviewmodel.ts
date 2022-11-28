import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScrollingMessageViewModel } from "./scrollingmessageviewmodel";
import { SlideViewModel } from "./slideviewmodel";


export enum MessageViewModelAnnunciatorTypeEnum {
    CommonsMain = "CommonsMain",
    LordsMain = "LordsMain",
    Security = "Security"
}


export class MessageViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annunciatorType" })
  annunciatorType?: MessageViewModelAnnunciatorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=isSecurityOverride" })
  isSecurityOverride?: boolean;

  @SpeakeasyMetadata({ data: "json, name=publishTime" })
  publishTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=scrollingMessages", elemType: ScrollingMessageViewModel })
  scrollingMessages?: ScrollingMessageViewModel[];

  @SpeakeasyMetadata({ data: "json, name=showCommonsBell" })
  showCommonsBell?: boolean;

  @SpeakeasyMetadata({ data: "json, name=showLordsBell" })
  showLordsBell?: boolean;

  @SpeakeasyMetadata({ data: "json, name=slides", elemType: SlideViewModel })
  slides?: SlideViewModel[];
}
