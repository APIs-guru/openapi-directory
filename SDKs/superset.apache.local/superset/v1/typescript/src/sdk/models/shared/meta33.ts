import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Meta33 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName: string;
}
