import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AlertAnnotationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationType" })
  annotationType?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
