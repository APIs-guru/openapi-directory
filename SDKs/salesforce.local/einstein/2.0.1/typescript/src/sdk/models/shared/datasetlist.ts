import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Dataset } from "./dataset";


export class DatasetList extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Dataset })
  data?: Dataset[];

  @Metadata({ data: "json, name=object" })
  object?: string;
}
