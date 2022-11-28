import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Token extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expiry" })
  expiry?: number;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}
