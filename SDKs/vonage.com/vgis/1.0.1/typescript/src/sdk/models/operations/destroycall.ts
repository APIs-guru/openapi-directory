import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DestroyCallPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DestroyCallRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DestroyCallPathParams;
}


export class DestroyCallResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Call })
  calls?: shared.Call[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
