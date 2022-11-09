import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AlertAnnotationInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationType" })
  annotationType?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: Date;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
