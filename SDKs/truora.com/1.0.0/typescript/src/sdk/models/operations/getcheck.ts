import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCheckPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=check_id" })
  checkId: string;
}


export class GetCheckSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetCheckRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCheckPathParams;

  @SpeakeasyMetadata()
  security: GetCheckSecurity;
}


export class GetCheckResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  checkOutput?: shared.CheckOutput;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
