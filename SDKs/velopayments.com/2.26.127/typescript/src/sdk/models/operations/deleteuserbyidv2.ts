import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteUserByIdV2PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class DeleteUserByIdV2Request extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteUserByIdV2PathParams;
}


export class DeleteUserByIdV2Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse401?: any;

  @Metadata()
  inlineResponse403?: any;

  @Metadata()
  inlineResponse404?: any;
}
