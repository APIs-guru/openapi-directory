import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMeReputationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;
}


export class GetMeReputationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetMeReputationQueryParams;
}


export class GetMeReputationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
