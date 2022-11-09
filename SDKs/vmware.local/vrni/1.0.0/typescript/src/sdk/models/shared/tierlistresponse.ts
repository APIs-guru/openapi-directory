import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tier } from "./tier";


export class TierListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=results", elemType: shared.Tier })
  results?: Tier[];
}
