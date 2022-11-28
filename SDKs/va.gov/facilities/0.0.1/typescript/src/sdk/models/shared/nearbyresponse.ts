import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Nearby } from "./nearby";
import { Meta } from "./meta";



export class NearbyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: Nearby })
  data: Nearby[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Meta;
}
