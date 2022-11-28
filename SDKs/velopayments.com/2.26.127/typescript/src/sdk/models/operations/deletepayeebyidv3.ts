import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePayeeByIdV3PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payeeId" })
  payeeId: string;
}


export class DeletePayeeByIdV3Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeletePayeeByIdV3PathParams;
}


export class DeletePayeeByIdV3Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
