import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ScrollingMessageViewModel } from "./scrollingmessageviewmodel";
import { SlideViewModel } from "./slideviewmodel";

export enum MessageViewModelAnnunciatorTypeEnum {
    CommonsMain = "CommonsMain"
,    LordsMain = "LordsMain"
,    Security = "Security"
}


export class MessageViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=annunciatorType" })
  annunciatorType?: MessageViewModelAnnunciatorTypeEnum;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=isSecurityOverride" })
  isSecurityOverride?: boolean;

  @Metadata({ data: "json, name=publishTime" })
  publishTime?: Date;

  @Metadata({ data: "json, name=scrollingMessages", elemType: shared.ScrollingMessageViewModel })
  scrollingMessages?: ScrollingMessageViewModel[];

  @Metadata({ data: "json, name=showCommonsBell" })
  showCommonsBell?: boolean;

  @Metadata({ data: "json, name=showLordsBell" })
  showLordsBell?: boolean;

  @Metadata({ data: "json, name=slides", elemType: shared.SlideViewModel })
  slides?: SlideViewModel[];
}
