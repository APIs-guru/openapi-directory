import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Meta7 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}
