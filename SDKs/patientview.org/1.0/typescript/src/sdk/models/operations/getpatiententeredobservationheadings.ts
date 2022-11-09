import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPatientEnteredObservationHeadingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: number;
}


export class GetPatientEnteredObservationHeadingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPatientEnteredObservationHeadingsPathParams;
}


export class GetPatientEnteredObservationHeadingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.ObservationHeading })
  observationHeadings?: shared.ObservationHeading[];

  @Metadata()
  statusCode: number;
}
