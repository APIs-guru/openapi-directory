import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Meta19 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}
