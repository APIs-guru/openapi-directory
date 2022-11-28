import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DetailedInvalidParam extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}
