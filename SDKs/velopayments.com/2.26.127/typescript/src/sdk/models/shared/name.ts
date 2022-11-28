import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Name extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=otherNames" })
  otherNames?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
