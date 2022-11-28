import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiV2010AccountCallCallEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=request" })
  request?: any;

  @SpeakeasyMetadata({ data: "json, name=response" })
  response?: any;
}
