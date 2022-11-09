import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSourceAccountV2PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=sourceAccountId" })
  sourceAccountId: string;
}


export class GetSourceAccountV2Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSourceAccountV2PathParams;
}


export class GetSourceAccountV2Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  sourceAccountResponseV2?: shared.SourceAccountResponseV2;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse400?: any;

  @Metadata()
  inlineResponse401?: any;

  @Metadata()
  inlineResponse403?: any;

  @Metadata()
  inlineResponse404?: any;
}
