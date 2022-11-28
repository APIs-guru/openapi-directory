import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteUserByIdV2PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class DeleteUserByIdV2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteUserByIdV2PathParams;
}


export class DeleteUserByIdV2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  inlineResponse401?: any;

  @SpeakeasyMetadata()
  inlineResponse403?: any;

  @SpeakeasyMetadata()
  inlineResponse404?: any;
}
