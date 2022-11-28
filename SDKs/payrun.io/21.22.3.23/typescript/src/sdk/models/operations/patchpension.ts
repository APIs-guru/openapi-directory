import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchPensionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PensionId" })
  pensionId: string;
}


export class PatchPensionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PatchPensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchPensionPathParams;

  @SpeakeasyMetadata()
  headers: PatchPensionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Pension;
}


export class PatchPensionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  pension?: shared.Pension;

  @SpeakeasyMetadata()
  statusCode: number;
}
