import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api_version" })
  apiVersion?: string;
}
