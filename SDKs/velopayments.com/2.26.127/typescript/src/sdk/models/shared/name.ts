import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Name extends SpeakeasyBase {
  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=otherNames" })
  otherNames?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
