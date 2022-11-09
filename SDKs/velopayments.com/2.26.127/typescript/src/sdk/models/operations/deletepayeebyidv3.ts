import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeletePayeeByIdV3PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payeeId" })
  payeeId: string;
}


export class DeletePayeeByIdV3Request extends SpeakeasyBase {
  @Metadata()
  pathParams: DeletePayeeByIdV3PathParams;
}


export class DeletePayeeByIdV3Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
