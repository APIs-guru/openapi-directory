import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiApp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}
