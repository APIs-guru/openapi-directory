import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTagsTagsRelatedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tags" })
  tags: string;
}


export class GetTagsTagsRelatedQueryParams extends SpeakeasyBase {
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


export class GetTagsTagsRelatedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTagsTagsRelatedPathParams;

  @Metadata()
  queryParams: GetTagsTagsRelatedQueryParams;
}


export class GetTagsTagsRelatedResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
