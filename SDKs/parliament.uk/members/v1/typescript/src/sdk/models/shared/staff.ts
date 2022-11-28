import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Staff extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string;

  @SpeakeasyMetadata({ data: "json, name=forename" })
  forename?: string;

  @SpeakeasyMetadata({ data: "json, name=surname" })
  surname?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
