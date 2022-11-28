import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisableUserV2PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class DisableUserV2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DisableUserV2PathParams;
}


export class DisableUserV2Response extends SpeakeasyBase {
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
