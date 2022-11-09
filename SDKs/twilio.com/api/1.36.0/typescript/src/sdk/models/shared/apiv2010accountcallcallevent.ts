import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiV2010AccountCallCallEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=request" })
  request?: any;

  @Metadata({ data: "json, name=response" })
  response?: any;
}
