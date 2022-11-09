import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSourceAccountV3PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=sourceAccountId" })
  sourceAccountId: string;
}


export class GetSourceAccountV3Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSourceAccountV3PathParams;
}


export class GetSourceAccountV3Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  sourceAccountResponseV3?: shared.SourceAccountResponseV3;

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
