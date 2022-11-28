import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProjectSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiKey: shared.SchemeApiKey;
}


export class GetProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetProjectSecurity;
}


export class GetProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
