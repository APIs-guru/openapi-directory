import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PublishedEarlyDayMotionGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PublishedEarlyDayMotionGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PublishedEarlyDayMotionGetPathParams;
}


export class PublishedEarlyDayMotionGetResponse extends SpeakeasyBase {
  @Metadata()
  apiResponseListPublishedWrittenQuestion?: shared.ApiResponseListPublishedWrittenQuestion;

  @Metadata()
  apiResponseObject?: shared.ApiResponseObject;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
