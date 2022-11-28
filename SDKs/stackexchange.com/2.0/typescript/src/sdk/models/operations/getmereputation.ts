import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMeReputationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;
}


export class GetMeReputationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetMeReputationQueryParams;
}


export class GetMeReputationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
