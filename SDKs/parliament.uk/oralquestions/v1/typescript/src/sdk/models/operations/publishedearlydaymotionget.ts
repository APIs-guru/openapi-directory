import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PublishedEarlyDayMotionGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PublishedEarlyDayMotionGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PublishedEarlyDayMotionGetPathParams;
}


export class PublishedEarlyDayMotionGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiResponseListPublishedWrittenQuestion?: shared.ApiResponseListPublishedWrittenQuestion;

  @SpeakeasyMetadata()
  apiResponseObject?: shared.ApiResponseObject;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
