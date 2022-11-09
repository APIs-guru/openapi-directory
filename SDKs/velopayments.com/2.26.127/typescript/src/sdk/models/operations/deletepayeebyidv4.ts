import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeletePayeeByIdV4PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payeeId" })
  payeeId: string;
}


export class DeletePayeeByIdV4Request extends SpeakeasyBase {
  @Metadata()
  pathParams: DeletePayeeByIdV4PathParams;
}


export class DeletePayeeByIdV4Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
