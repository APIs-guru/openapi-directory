import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Nearby } from "./nearby";
import { Meta } from "./meta";


export class NearbyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Nearby })
  data: Nearby[];

  @Metadata({ data: "json, name=meta" })
  meta?: Meta;
}
