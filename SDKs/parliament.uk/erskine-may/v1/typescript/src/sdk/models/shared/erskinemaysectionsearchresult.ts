import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErskineMaySectionSearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chapterNumber" })
  chapterNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=chapterTitle" })
  chapterTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=partNumber" })
  partNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=sectionId" })
  sectionId?: number;

  @SpeakeasyMetadata({ data: "json, name=sectionTitle" })
  sectionTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=sectionTitleChain" })
  sectionTitleChain?: string;
}
