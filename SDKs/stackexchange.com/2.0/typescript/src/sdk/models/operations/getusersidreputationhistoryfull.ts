import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetUsersIdReputationHistoryFullPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetUsersIdReputationHistoryFullQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;
}


export class GetUsersIdReputationHistoryFullRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersIdReputationHistoryFullPathParams;

  @Metadata()
  queryParams: GetUsersIdReputationHistoryFullQueryParams;
}


export class GetUsersIdReputationHistoryFullResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
