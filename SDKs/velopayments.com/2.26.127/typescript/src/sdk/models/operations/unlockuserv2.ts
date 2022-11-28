import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UnlockUserV2PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UnlockUserV2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UnlockUserV2PathParams;
}


export class UnlockUserV2Response extends SpeakeasyBase {
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
}
