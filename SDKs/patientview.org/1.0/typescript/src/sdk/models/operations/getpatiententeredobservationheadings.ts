import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPatientEnteredObservationHeadingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: number;
}


export class GetPatientEnteredObservationHeadingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPatientEnteredObservationHeadingsPathParams;
}


export class GetPatientEnteredObservationHeadingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.ObservationHeading })
  observationHeadings?: shared.ObservationHeading[];

  @SpeakeasyMetadata()
  statusCode: number;
}
