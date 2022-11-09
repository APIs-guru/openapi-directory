import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisableUserV2PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class DisableUserV2Request extends SpeakeasyBase {
  @Metadata()
  pathParams: DisableUserV2PathParams;
}


export class DisableUserV2Response extends SpeakeasyBase {
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
