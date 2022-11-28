import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreatePoolGroupBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region: number;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
