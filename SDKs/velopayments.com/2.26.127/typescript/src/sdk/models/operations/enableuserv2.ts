import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnableUserV2PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class EnableUserV2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnableUserV2PathParams;
}


export class EnableUserV2Response extends SpeakeasyBase {
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
