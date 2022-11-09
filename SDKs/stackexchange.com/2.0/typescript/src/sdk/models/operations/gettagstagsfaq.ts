import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTagsTagsFaqPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tags" })
  tags: string;
}


export class GetTagsTagsFaqQueryParams extends SpeakeasyBase {
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


export class GetTagsTagsFaqRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTagsTagsFaqPathParams;

  @Metadata()
  queryParams: GetTagsTagsFaqQueryParams;
}


export class GetTagsTagsFaqResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
