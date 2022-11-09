import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ErskineMaySectionSearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=chapterNumber" })
  chapterNumber?: number;

  @Metadata({ data: "json, name=chapterTitle" })
  chapterTitle?: string;

  @Metadata({ data: "json, name=partNumber" })
  partNumber?: number;

  @Metadata({ data: "json, name=sectionId" })
  sectionId?: number;

  @Metadata({ data: "json, name=sectionTitle" })
  sectionTitle?: string;

  @Metadata({ data: "json, name=sectionTitleChain" })
  sectionTitleChain?: string;
}
