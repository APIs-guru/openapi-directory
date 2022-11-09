import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ClickModel } from "./clickmodel";


export class GetClicksModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=clicks", elemType: shared.ClickModel })
  clicks?: ClickModel[];

  @Metadata({ data: "json, name=lastId" })
  lastId?: string;
}
