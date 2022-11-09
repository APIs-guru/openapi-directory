import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAvailableObservationHeadingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: number;
}


export class GetAvailableObservationHeadingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAvailableObservationHeadingsPathParams;
}


export class GetAvailableObservationHeadingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.ObservationHeading })
  observationHeadings?: shared.ObservationHeading[];

  @Metadata()
  statusCode: number;
}
