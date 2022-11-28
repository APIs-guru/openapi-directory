import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSourceAccountV3PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sourceAccountId" })
  sourceAccountId: string;
}


export class DeleteSourceAccountV3Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSourceAccountV3PathParams;
}


export class DeleteSourceAccountV3Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

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

  @SpeakeasyMetadata()
  inlineResponse409?: any;
}
