import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
