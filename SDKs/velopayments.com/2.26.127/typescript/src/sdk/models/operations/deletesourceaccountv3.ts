import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteSourceAccountV3PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=sourceAccountId" })
  sourceAccountId: string;
}


export class DeleteSourceAccountV3Request extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSourceAccountV3PathParams;
}


export class DeleteSourceAccountV3Response extends SpeakeasyBase {
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

  @Metadata()
  inlineResponse409?: any;
}
