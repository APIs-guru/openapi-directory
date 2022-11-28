import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErskineMaySectionOverview extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=subSections", elemType: ErskineMaySectionOverview })
  subSections?: ErskineMaySectionOverview[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=titleChain" })
  titleChain?: string;
}
