import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErskineMayFootnote } from "./erskinemayfootnote";
import { ErskineMaySectionOverview } from "./erskinemaysectionoverview";



export class ErskineMaySectionDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chapterNumber" })
  chapterNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=chapterTitle" })
  chapterTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=contentHtml" })
  contentHtml?: string;

  @SpeakeasyMetadata({ data: "json, name=footnotes", elemType: ErskineMayFootnote })
  footnotes?: ErskineMayFootnote[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=parentSectionId" })
  parentSectionId?: number;

  @SpeakeasyMetadata({ data: "json, name=parentSectionTitle" })
  parentSectionTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=partNumber" })
  partNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=partTitle" })
  partTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=subSections", elemType: ErskineMaySectionOverview })
  subSections?: ErskineMaySectionOverview[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=titleChain" })
  titleChain?: string;
}
