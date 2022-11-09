import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Model } from "./model";


export class ModelList extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Model })
  data?: Model[];

  @Metadata({ data: "json, name=object" })
  object?: string;
}
