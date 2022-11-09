import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnableUserV2PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class EnableUserV2Request extends SpeakeasyBase {
  @Metadata()
  pathParams: EnableUserV2PathParams;
}


export class EnableUserV2Response extends SpeakeasyBase {
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
