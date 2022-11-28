import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTagsTagsFaqPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tags" })
  tags: string;
}


export class GetTagsTagsFaqQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;
}


export class GetTagsTagsFaqRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTagsTagsFaqPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTagsTagsFaqQueryParams;
}


export class GetTagsTagsFaqResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
