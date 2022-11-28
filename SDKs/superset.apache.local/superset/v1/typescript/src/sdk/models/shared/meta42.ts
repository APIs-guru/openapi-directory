import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Meta42 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}
