import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class V3RouteServiceStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: Date;
}
