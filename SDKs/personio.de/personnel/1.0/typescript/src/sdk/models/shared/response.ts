import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Response extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success: boolean;
}
