import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DestroyCallPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DestroyCallRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DestroyCallPathParams;
}


export class DestroyCallResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Call })
  calls?: shared.Call[];

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
