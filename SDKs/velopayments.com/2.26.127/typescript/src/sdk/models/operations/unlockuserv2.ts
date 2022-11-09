import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UnlockUserV2PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UnlockUserV2Request extends SpeakeasyBase {
  @Metadata()
  pathParams: UnlockUserV2PathParams;
}


export class UnlockUserV2Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

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
