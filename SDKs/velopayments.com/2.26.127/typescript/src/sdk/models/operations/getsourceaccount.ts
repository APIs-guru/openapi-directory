import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSourceAccountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=sourceAccountId" })
  sourceAccountId: string;
}


export class GetSourceAccountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSourceAccountPathParams;
}


export class GetSourceAccountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  sourceAccountResponse?: shared.SourceAccountResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse401?: any;

  @Metadata()
  inlineResponse404?: any;
}
