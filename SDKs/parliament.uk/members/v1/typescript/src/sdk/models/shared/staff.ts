import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Staff extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: string;

  @Metadata({ data: "json, name=forename" })
  forename?: string;

  @Metadata({ data: "json, name=surname" })
  surname?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
