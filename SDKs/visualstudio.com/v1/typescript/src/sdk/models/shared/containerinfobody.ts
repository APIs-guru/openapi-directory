import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContainerInfoBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=schemaVersion" })
  schemaVersion?: string;
}
