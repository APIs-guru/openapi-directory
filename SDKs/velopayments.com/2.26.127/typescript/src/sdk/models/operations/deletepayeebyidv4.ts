import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePayeeByIdV4PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payeeId" })
  payeeId: string;
}


export class DeletePayeeByIdV4Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeletePayeeByIdV4PathParams;
}


export class DeletePayeeByIdV4Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
