import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCheckPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=check_id" })
  checkId: string;
}


export class GetCheckSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetCheckRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCheckPathParams;

  @Metadata()
  security: GetCheckSecurity;
}


export class GetCheckResponse extends SpeakeasyBase {
  @Metadata()
  checkOutput?: shared.CheckOutput;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: any;

  @Metadata()
  statusCode: number;
}
