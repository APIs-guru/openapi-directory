import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetUsersIdsReputationHistoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string;
}


export class GetUsersIdsReputationHistoryQueryParams extends SpeakeasyBase {
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


export class GetUsersIdsReputationHistoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersIdsReputationHistoryPathParams;

  @Metadata()
  queryParams: GetUsersIdsReputationHistoryQueryParams;
}


export class GetUsersIdsReputationHistoryResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
