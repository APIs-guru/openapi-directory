import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutAttributesComputedIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutAttributesComputedIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutAttributesComputedIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Attribute;
}


export class PutAttributesComputedIdResponse extends SpeakeasyBase {
  @Metadata()
  attribute?: shared.Attribute;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
