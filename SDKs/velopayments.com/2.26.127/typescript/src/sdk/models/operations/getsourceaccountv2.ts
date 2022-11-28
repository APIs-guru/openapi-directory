import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSourceAccountV2PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sourceAccountId" })
  sourceAccountId: string;
}


export class GetSourceAccountV2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSourceAccountV2PathParams;
}


export class GetSourceAccountV2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sourceAccountResponseV2?: shared.SourceAccountResponseV2;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  inlineResponse400?: any;

  @SpeakeasyMetadata()
  inlineResponse401?: any;

  @SpeakeasyMetadata()
  inlineResponse403?: any;

  @SpeakeasyMetadata()
  inlineResponse404?: any;
}
