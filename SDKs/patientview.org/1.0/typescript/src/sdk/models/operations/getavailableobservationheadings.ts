import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAvailableObservationHeadingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: number;
}


export class GetAvailableObservationHeadingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAvailableObservationHeadingsPathParams;
}


export class GetAvailableObservationHeadingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.ObservationHeading })
  observationHeadings?: shared.ObservationHeading[];

  @SpeakeasyMetadata()
  statusCode: number;
}
