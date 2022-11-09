import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ContainerInfoBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=schemaVersion" })
  schemaVersion?: string;
}
