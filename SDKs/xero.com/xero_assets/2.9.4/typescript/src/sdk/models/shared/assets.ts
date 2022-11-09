import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Asset } from "./asset";


export class Assets extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Asset })
  items?: Asset[];

  @Metadata({ data: "json, name=pagination" })
  pagination?: any;
}
