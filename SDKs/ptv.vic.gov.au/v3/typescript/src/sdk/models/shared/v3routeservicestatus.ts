import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class V3RouteServiceStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: Date;
}
