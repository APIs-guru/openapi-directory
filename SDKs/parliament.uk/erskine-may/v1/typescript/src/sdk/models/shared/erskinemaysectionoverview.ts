import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ErskineMaySectionOverview } from "./erskinemaysectionoverview";


export class ErskineMaySectionOverview extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=subSections", elemType: shared.ErskineMaySectionOverview })
  subSections?: ErskineMaySectionOverview[];

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=titleChain" })
  titleChain?: string;
}
