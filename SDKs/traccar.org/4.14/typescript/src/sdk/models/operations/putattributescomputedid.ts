import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutAttributesComputedIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutAttributesComputedIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutAttributesComputedIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Attribute;
}


export class PutAttributesComputedIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attribute?: shared.Attribute;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
