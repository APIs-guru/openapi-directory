import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdatePoolGroupBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
