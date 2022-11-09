import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TagApiGetCategoryNamesListNameMatchModeEnum {
    Auto = "Auto"
,    Partial = "Partial"
,    StartsWith = "StartsWith"
,    Exact = "Exact"
,    Words = "Words"
}


export class TagApiGetCategoryNamesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: TagApiGetCategoryNamesListNameMatchModeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class TagApiGetCategoryNamesListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: TagApiGetCategoryNamesListQueryParams;
}


export class TagApiGetCategoryNamesListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagApiGetCategoryNamesList200ApplicationJsonStrings?: string[];

  @Metadata()
  tagApiGetCategoryNamesList200ApplicationJsonpStrings?: string[];

  @Metadata()
  tagApiGetCategoryNamesList200TextJsonStrings?: string[];
}
