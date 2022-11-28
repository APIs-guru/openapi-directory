import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class V3Status extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=health" })
  health?: number;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
