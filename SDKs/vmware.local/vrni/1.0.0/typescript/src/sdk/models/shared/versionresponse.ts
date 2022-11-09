import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=api_version" })
  apiVersion?: string;
}
